<template>
	<u-navbar
		title="加分中心"
		@rightClick="showDrawer"
		:autoBack="true"
		rightIcon="list"
	>
	</u-navbar>
	<ksp-cropper mode="free" :width="200" :height="140" :maxWidth="1024" :maxHeight="1024"
	:url="url" @cancel="oncancel" @ok="onok"></ksp-cropper>
	<uni-popup ref="popup" type="center">
		<uni-table border stripe emptyText="暂无更多数据" >
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">日期</uni-th>
				<uni-th align="center">姓名</uni-th>
				<uni-th align="left">地址</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr>
				<uni-td>2020-10-20</uni-td>
				<uni-td>Jeson</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-21</uni-td>
				<uni-td>HanMeiMei</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
		</uni-table>
	</uni-popup>
	<uni-drawer ref="showLeft" mode="left" :mask-click="true">
		<scroll-view style="height: 100%;" scroll-y="true" class="scroll-view_box">
			<view class="avatar_get" v-for="item in day_fen">
				<view class="avatar_get_box">
					<u--image :showLoading="true" 
					shape="circle"
					:src="url_a" 
					width="100rpx" height="100rpx" @click="select"></u--image>
				</view>
				<view class="avatar_get_fen">
					<view class="avatar_get_fen_z">
						总分：{{item.sum}}
					</view>
					<view class="avatar_get_fen_to">
						<u--text type="success" text="今日得分" size="12"></u--text>
						<u--text type="success" :text="item.day.today" size="12"></u--text>
					</view>
				</view>
			</view>
			<!-- <l-painter ref="painter">
			  <l-painter-view css="background: #e0e2db; padding: 30rpx; color: #222a29">
			      <l-painter-text
			        text="水调歌头\n明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。"
			        css="line-clamp: 3; padding-top: 20rpx; background: linear-gradient(,#ff971b 0%, #ff5000 100%); background-clip: text"
			      />
			    </l-painter-view>
			</l-painter> -->
			<u-gap height="10" bgColor="transparent"></u-gap>
			<u-button type="primary" text="生成海报" @click="shengc"></u-button>
			<u-gap height="10" bgColor="transparent"></u-gap>
			<u-button type="primary" text="查看事件" @click="open_table"></u-button>
		</scroll-view>
	</uni-drawer>
	<view class="content">
		<view class="content_box">
			<u-notify ref="uNotify" :message="notify" :show="show"></u-notify>
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="12">
					<view class="sp">
						<view>
						    <uni-data-select
						      v-model="value"
						      :localdata="range"
						      @change="change"
						    ></uni-data-select>
						  </view>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="8">
					<view class="sp">
						<u--input
						    placeholder="请输入事件"
						    border="surround"
						    v-model="shijian"
						></u--input>
					</view>
				</u-col>
				<u-col span="4">
					<view class="sp">
						<u--input
						    placeholder="请输入分数"
						    border="surround"
						    v-model="fenshu"
						></u--input>
					</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="6">
					<view class="sp">
						<u-button type="primary" text="确定" @click="queren"></u-button>
					</view>
				</u-col>
				<u-col span="6">
					<view class="sp">
						<u-button type="primary" :plain="true" text="取消" @click="quxiao"></u-button>
					</view>
				</u-col>
			</u-row>
			<view class="charts">
				<view class="charts-box">
				    <qiun-data-charts 
				      type="line"
				      :opts="opts"
				      :chartData="chartData"
				    />
				</view>
			</view>
		</view>
	</view>
	<u-button type="primary" text="刷新" @click="sendGet"></u-button>
	<u-popup :show="popup_show" @close="close" @open="open" mode="center" bgColor="transparent">
		<view>
			<u--image :showLoading="true" :src="url_hb" width="300px" height="350px" mode="aspectFit" @click="click"></u--image>
		</view>
	</u-popup>
</template>

<script>
	// import uCharts  from '@/uni_modules/@qiun/ucharts/u-charts.js'
	// var uChartsInstance = {};
	import * as echarts from 'echarts'
	export default {
		name:'index',
		data() {
			return {
				name:'', // 加分人的名字
				shijian:'', // 加分事件
				fenshu:'',// 加分分数
				notify:'成功取消',// 顶部提示消息
				show:true,// 顶部提示消息是否显示
				day_fen:[],// 得分
				yang_sum:0,// 小杨总分
				wang_sum:0,// 小王总分
				function_list:[],// 所有事件
				popup_show:false,// 弹出层
				value: 0,
				url_hb:'',//图片海报地址
				url:'',
				url_a:'https://pic-bed-img.aotuji.cn/img/websit_cy_1.jpg',//头像图片地址
				path:'',
				res_data:[],
				range: [
					{ value: 0, text: "小杨" },
					{ value: 1, text: "小王" },
				],
				chartData: {},
			    opts: {
				  color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
				  padding: [15,10,0,15],
				  dataLabel: false,
				  dataPointShape: false,
				  enableScroll: false,
				  legend: {},
				  xAxis: {
					disableGrid: true
				  },
				  yAxis: {
					gridType: "dash",
					dashLength: 2,
					data: [
					  {
						min: -5,
						max: 5
					  }
					]
				  },
				  extra: {
					line: {
					  type: "curve",
					  width: 2,
					  activeType: "hollow",
					  linearType: "custom",
					  onShadow: true,
					  animation: "horizontal"
					}
				  }
				},
			}
		},
		onLoad() {
			
		},
		onReady(){
			this.getServerData();
			setTimeout(()=>{
				this.day_fen_wang();
				
			},1000)
			setTimeout(()=>{
				this.day_fen_yang();
			},1200)
			this.Function_all()
		},
		methods: {
			getServerData() {
			  //模拟从服务器获取数据时的延时
			  setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					categories: ["1","2","3","4","5","6","7","8","9","10","11","12"],
					series: [
						{
							name: "小杨",
							linearColor: [
							  [
								0,
								"#1890FF"
							  ],
							  [
								0.25,
								"#00B5FF"
							  ],
							  [
								0.5,
								"#00D1ED"
							  ],
							  [
								0.75,
								"#00E6BB"
							  ],
							  [
								1,
								"#90F489"
							  ]
							],
							setShadow: [
							  3,
							  8,
							  10,
							  "#1890FF"
							],
							data: []
						},
						{
							name: "小王",
							data: []
						},
					]
				};
				// this.res_data = res
				this.chartData = JSON.parse(JSON.stringify(res));
			  }, 500);
			 setTimeout(() => {
				 this.sendGet();
			 },800)
			},
			quxiao(){
				this.$refs.uNotify.show({
					top: 0,
					type: 'success',
					color: '#fff',
					bgColor: '#53c21d',
					message: this.notify,
					duration: 1000 * 3,
					fontSize: 14,
					safeAreaInsetTop:true
				})
			},
			queren(){
				this.day_fen = []
				this.setfenshi()
				this.sendGet()
				setTimeout(()=>{
					this.day_fen_wang();
					
				},1000)
				setTimeout(()=>{
					this.day_fen_yang();
				},1200)
			},
			// 打开左侧栏
			showDrawer() {
				this.$refs.showLeft.open();
			},
			// 关闭左侧栏
			closeDrawer() {
				this.$refs.showLeft.close();
			},
			// 选择名称
			change(e) {
			  this.name = this.value == 0?'小杨':'小王'
			},
			// 生成海报
			shengc(){
				this.$refs.painter.canvasToTempFilePathSync({
				  fileType: "jpg",
				  // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
				  pathType: 'url',
				  quality: 1,
				  success: (res) => {
				    console.log(res.tempFilePath);
					this.url_hb = res.tempFilePath
				    // 非H5 保存到相册
				    // H5 提示用户长按图另存
				    uni.saveImageToPhotosAlbum({
				        filePath: res.tempFilePath,
				        success: function () {
				            console.log('save success');
				        }
				    });
				  },
				});
				this.popup_show = true
			},
			open() {
			  // console.log('open');
			},
			close() {
			  this.popup_show = false
			  // console.log('close');
			},
			// 查看事件
			open_table(){
				this.$refs.popup.open('center')
			},
			// 打开头像截图
			select() {
				uni.chooseImage({
					count: 1,
					success: (rst) => {
						// 设置url的值，显示控件
						this.url = rst.tempFilePaths[0];
					}
				});
			},
			onok(ev) {
				this.url = "";
				this.url_a = ev.path;
			},
			oncancel() {
				// url设置为空，隐藏控件
				this.url = "";
			},
			// 发送请求
			sendGet () {
				var that = this;
				uni.request({
					url: 'http://127.0.0.1:3007/api/score',
					method: 'POST',
					timeout: 60000,
					success(res) {
						that.res_data = res.data.data.data;
						that.chartData.series[0].data=[];
						that.chartData.series[1].data=[];
						that.yang_sum = 0;
						that.wang_sum = 0;
						for(let i = 0; i < that.res_data.length; i++){
							if(that.res_data[i].user_id == "0"){
								that.chartData.series[0].data=[...that.chartData.series[0].data,that.res_data[i].user_score];
								that.yang_sum +=  that.res_data[i].user_score;
								
							}else{
								that.chartData.series[1].data=[...that.chartData.series[1].data,that.res_data[i].user_score];
								that.wang_sum += that.res_data[i].user_score;
								
							}
						}
					}
				})
			},
			// 发送请求
			setfenshi () {
				var that = this;
				uni.request({
					url: 'http://127.0.0.1:3007/api/add_fenshu',
					method: 'POST',
					timeout: 60000,
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						name: that.value,
						fenshu:that.fenshu,
						shijian:that.shijian
					},
					success(res) {
						if(res.data.status==0){
							that.$refs.uNotify.show({
								top: 0,
								type: 'success',
								color: '#fff',
								bgColor: '#53c21d',
								message: '添加成功',
								duration: 1000 * 3,
								fontSize: 14,
								safeAreaInsetTop:true
							})
						}else{
							that.$refs.uNotify.show({
								top: 0,
								type: 'error',
								color: '#fff',
								bgColor: '#f9ae3d',
								message: '添加失败',
								duration: 1000 * 3,
								fontSize: 14,
								safeAreaInsetTop:true
							})
						}
						
					}
				})
			},
			// 今日得分
			day_fen_wang(){
				var that = this;
				uni.request({
					url: 'http://127.0.0.1:3007/api/day_x_wang',
					method: 'POST',
					timeout: 60000,
					success(res) {
						that.day_fen.push({
							day_fen_type:1,
							day:res.data.data.data[0],
							sum:that.wang_sum.toFixed(2),
						})
					}
				})
			},
			// 今日得分
			day_fen_yang(){
				var that = this;
				uni.request({
					url: 'http://127.0.0.1:3007/api/day_x_yang',
					method: 'POST',
					timeout: 60000,
					success(res) {
						that.day_fen.push({
							day_fen_type:0,
							day:res.data.data.data[0],
							sum:that.yang_sum.toFixed(2),
						})
					}
				})
			},
			// 所有事件
			Function_all(){
				var that = this;
				uni.request({
					url: 'http://127.0.0.1:3007/api/function_all',
					method: 'POST',
					timeout: 60000,
					success(res) {
						that.function_list = res.data.data.data
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		padding-top: 120rpx;
		// background-image: url();
		.content_box{
			width: 600rpx;
			height: 450rpx;
			padding-top: 40rpx;
			border-radius: 15rpx;
			box-shadow:  0px 00px 20px #e5e5e5;
			box-sizing: border-box;
			.sp{
				padding: 10rpx 20rpx 10rpx 20rpx;
				box-sizing: border-box;
			}
		}
	}
	.charts-box {
		width: 100%;
		height: 300px;
	}
	.scroll-view_box{
		padding-top: 40rpx;
		box-sizing: border-box;
		overflow: hidden;
	}
	.avatar_get{
		display: flex;
		align-items: center;
		padding-bottom: 20rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		.avatar_get_fen{
			width: 100%;
			padding-left: 20rpx;
			box-sizing: border-box;
			.avatar_get_fen_z{
				font-size: 28rpx;
			}
			.avatar_get_fen_to{
				display: flex;
				padding-top: 10rpx;
				box-sizing: border-box;
				font-size: 24rpx;
			}
		}
	}
	.charts{
		padding-top: 100rpx;
		box-sizing: border-box;
	}
</style>
