"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "index",
  data() {
    return {
      name: "",
      // 加分人的名字
      shijian: "",
      // 加分事件
      fenshu: "",
      // 加分分数
      notify: "成功取消",
      // 顶部提示消息
      show: true,
      // 顶部提示消息是否显示
      day_fen: [],
      // 得分
      yang_sum: 0,
      // 小杨总分
      wang_sum: 0,
      // 小王总分
      function_list: [],
      // 所有事件
      popup_show: false,
      // 弹出层
      value: 0,
      url_hb: "",
      //图片海报地址
      url: "",
      url_a: "https://pic-bed-img.aotuji.cn/img/websit_cy_1.jpg",
      //头像图片地址
      path: "",
      res_data: [],
      range: [
        { value: 0, text: "小杨" },
        { value: 1, text: "小王" }
      ],
      chartData: {},
      opts: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
        padding: [15, 10, 0, 15],
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
      }
    };
  },
  onLoad() {
  },
  onReady() {
    this.getServerData();
    setTimeout(() => {
      this.day_fen_wang();
    }, 1e3);
    setTimeout(() => {
      this.day_fen_yang();
    }, 1200);
    this.Function_all();
  },
  methods: {
    getServerData() {
      setTimeout(() => {
        let res = {
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
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
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
      setTimeout(() => {
        this.sendGet();
      }, 800);
    },
    quxiao() {
      this.$refs.uNotify.show({
        top: 0,
        type: "success",
        color: "#fff",
        bgColor: "#53c21d",
        message: this.notify,
        duration: 1e3 * 3,
        fontSize: 14,
        safeAreaInsetTop: true
      });
    },
    queren() {
      this.day_fen = [];
      this.setfenshi();
      this.sendGet();
      setTimeout(() => {
        this.day_fen_wang();
      }, 1e3);
      setTimeout(() => {
        this.day_fen_yang();
      }, 1200);
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
      this.name = this.value == 0 ? "小杨" : "小王";
    },
    // 生成海报
    shengc() {
      this.$refs.painter.canvasToTempFilePathSync({
        fileType: "jpg",
        // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
        pathType: "url",
        quality: 1,
        success: (res) => {
          console.log(res.tempFilePath);
          this.url_hb = res.tempFilePath;
          common_vendor.index.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function() {
              console.log("save success");
            }
          });
        }
      });
      this.popup_show = true;
    },
    open() {
    },
    close() {
      this.popup_show = false;
    },
    // 查看事件
    open_table() {
      this.$refs.popup.open("center");
    },
    // 打开头像截图
    select() {
      common_vendor.index.chooseImage({
        count: 1,
        success: (rst) => {
          this.url = rst.tempFilePaths[0];
        }
      });
    },
    onok(ev) {
      this.url = "";
      this.url_a = ev.path;
    },
    oncancel() {
      this.url = "";
    },
    // 发送请求
    sendGet() {
      var that = this;
      common_vendor.index.request({
        url: "http://127.0.0.1:3007/api/score",
        method: "POST",
        timeout: 6e4,
        success(res) {
          that.res_data = res.data.data.data;
          that.chartData.series[0].data = [];
          that.chartData.series[1].data = [];
          that.yang_sum = 0;
          that.wang_sum = 0;
          for (let i = 0; i < that.res_data.length; i++) {
            if (that.res_data[i].user_id == "0") {
              that.chartData.series[0].data = [...that.chartData.series[0].data, that.res_data[i].user_score];
              that.yang_sum += that.res_data[i].user_score;
            } else {
              that.chartData.series[1].data = [...that.chartData.series[1].data, that.res_data[i].user_score];
              that.wang_sum += that.res_data[i].user_score;
            }
          }
        }
      });
    },
    // 发送请求
    setfenshi() {
      var that = this;
      common_vendor.index.request({
        url: "http://127.0.0.1:3007/api/add_fenshu",
        method: "POST",
        timeout: 6e4,
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: {
          name: that.value,
          fenshu: that.fenshu,
          shijian: that.shijian
        },
        success(res) {
          if (res.data.status == 0) {
            that.$refs.uNotify.show({
              top: 0,
              type: "success",
              color: "#fff",
              bgColor: "#53c21d",
              message: "添加成功",
              duration: 1e3 * 3,
              fontSize: 14,
              safeAreaInsetTop: true
            });
          } else {
            that.$refs.uNotify.show({
              top: 0,
              type: "error",
              color: "#fff",
              bgColor: "#f9ae3d",
              message: "添加失败",
              duration: 1e3 * 3,
              fontSize: 14,
              safeAreaInsetTop: true
            });
          }
        }
      });
    },
    // 今日得分
    day_fen_wang() {
      var that = this;
      common_vendor.index.request({
        url: "http://127.0.0.1:3007/api/day_x_wang",
        method: "POST",
        timeout: 6e4,
        success(res) {
          that.day_fen.push({
            day_fen_type: 1,
            day: res.data.data.data[0],
            sum: that.wang_sum.toFixed(2)
          });
        }
      });
    },
    // 今日得分
    day_fen_yang() {
      var that = this;
      common_vendor.index.request({
        url: "http://127.0.0.1:3007/api/day_x_yang",
        method: "POST",
        timeout: 6e4,
        success(res) {
          that.day_fen.push({
            day_fen_type: 0,
            day: res.data.data.data[0],
            sum: that.yang_sum.toFixed(2)
          });
        }
      });
    },
    // 所有事件
    Function_all() {
      var that = this;
      common_vendor.index.request({
        url: "http://127.0.0.1:3007/api/function_all",
        method: "POST",
        timeout: 6e4,
        success(res) {
          that.function_list = res.data.data.data;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_ksp_cropper2 = common_vendor.resolveComponent("ksp-cropper");
  const _component_uni_th = common_vendor.resolveComponent("uni-th");
  const _component_uni_tr = common_vendor.resolveComponent("uni-tr");
  const _component_uni_td = common_vendor.resolveComponent("uni-td");
  const _component_uni_table = common_vendor.resolveComponent("uni-table");
  const _component_uni_popup = common_vendor.resolveComponent("uni-popup");
  const _easycom_u__image2 = common_vendor.resolveComponent("u--image");
  const _easycom_u__text2 = common_vendor.resolveComponent("u--text");
  const _easycom_u_gap2 = common_vendor.resolveComponent("u-gap");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  const _easycom_u_notify2 = common_vendor.resolveComponent("u-notify");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  const _easycom_u__input2 = common_vendor.resolveComponent("u--input");
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_navbar2 + _easycom_ksp_cropper2 + _component_uni_th + _component_uni_tr + _component_uni_td + _component_uni_table + _component_uni_popup + _easycom_u__image2 + _easycom_u__text2 + _easycom_u_gap2 + _easycom_u_button2 + _easycom_uni_drawer2 + _easycom_u_notify2 + _easycom_uni_data_select2 + _easycom_u_col2 + _easycom_u_row2 + _easycom_u__input2 + _easycom_qiun_data_charts2 + _easycom_u_popup2)();
}
const _easycom_u_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_ksp_cropper = () => "../../uni_modules/ksp-cropper/components/ksp-cropper/ksp-cropper.js";
const _easycom_u__image = () => "../../uni_modules/uview-plus/components/u--image/u--image.js";
const _easycom_u__text = () => "../../uni_modules/uview-plus/components/u--text/u--text.js";
const _easycom_u_gap = () => "../../uni_modules/uview-plus/components/u-gap/u-gap.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
const _easycom_u_notify = () => "../../uni_modules/uview-plus/components/u-notify/u-notify.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_u_col = () => "../../uni_modules/uview-plus/components/u-col/u-col.js";
const _easycom_u_row = () => "../../uni_modules/uview-plus/components/u-row/u-row.js";
const _easycom_u__input = () => "../../uni_modules/uview-plus/components/u--input/u--input.js";
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
const _easycom_u_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_ksp_cropper + _easycom_u__image + _easycom_u__text + _easycom_u_gap + _easycom_u_button + _easycom_uni_drawer + _easycom_u_notify + _easycom_uni_data_select + _easycom_u_col + _easycom_u_row + _easycom_u__input + _easycom_qiun_data_charts + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.showDrawer),
    b: common_vendor.p({
      title: "加分中心",
      autoBack: true,
      rightIcon: "list"
    }),
    c: common_vendor.o($options.oncancel),
    d: common_vendor.o($options.onok),
    e: common_vendor.p({
      mode: "free",
      width: 200,
      height: 140,
      maxWidth: 1024,
      maxHeight: 1024,
      url: $data.url
    }),
    f: common_vendor.p({
      align: "center"
    }),
    g: common_vendor.p({
      align: "center"
    }),
    h: common_vendor.p({
      align: "left"
    }),
    i: common_vendor.p({
      border: true,
      stripe: true,
      emptyText: "暂无更多数据"
    }),
    j: common_vendor.sr("popup", "1cf27b2a-2"),
    k: common_vendor.p({
      type: "center"
    }),
    l: common_vendor.f($data.day_fen, (item, k0, i0) => {
      return {
        a: "1cf27b2a-17-" + i0 + ",1cf27b2a-16",
        b: common_vendor.t(item.sum),
        c: "1cf27b2a-18-" + i0 + ",1cf27b2a-16",
        d: "1cf27b2a-19-" + i0 + ",1cf27b2a-16",
        e: common_vendor.p({
          type: "success",
          text: item.day.today,
          size: "12"
        })
      };
    }),
    m: common_vendor.o($options.select),
    n: common_vendor.p({
      showLoading: true,
      shape: "circle",
      src: $data.url_a,
      width: "100rpx",
      height: "100rpx"
    }),
    o: common_vendor.p({
      type: "success",
      text: "今日得分",
      size: "12"
    }),
    p: common_vendor.p({
      height: "10",
      bgColor: "transparent"
    }),
    q: common_vendor.o($options.shengc),
    r: common_vendor.p({
      type: "primary",
      text: "生成海报"
    }),
    s: common_vendor.p({
      height: "10",
      bgColor: "transparent"
    }),
    t: common_vendor.o($options.open_table),
    v: common_vendor.p({
      type: "primary",
      text: "查看事件"
    }),
    w: common_vendor.sr("showLeft", "1cf27b2a-16"),
    x: common_vendor.p({
      mode: "left",
      ["mask-click"]: true
    }),
    y: common_vendor.sr("uNotify", "1cf27b2a-24"),
    z: common_vendor.p({
      message: $data.notify,
      show: $data.show
    }),
    A: common_vendor.o($options.change),
    B: common_vendor.o(($event) => $data.value = $event),
    C: common_vendor.p({
      localdata: $data.range,
      modelValue: $data.value
    }),
    D: common_vendor.p({
      span: "12"
    }),
    E: common_vendor.p({
      customStyle: "margin-bottom: 10px"
    }),
    F: common_vendor.o(($event) => $data.shijian = $event),
    G: common_vendor.p({
      placeholder: "请输入事件",
      border: "surround",
      modelValue: $data.shijian
    }),
    H: common_vendor.p({
      span: "8"
    }),
    I: common_vendor.o(($event) => $data.fenshu = $event),
    J: common_vendor.p({
      placeholder: "请输入分数",
      border: "surround",
      modelValue: $data.fenshu
    }),
    K: common_vendor.p({
      span: "4"
    }),
    L: common_vendor.p({
      customStyle: "margin-bottom: 10px"
    }),
    M: common_vendor.o($options.queren),
    N: common_vendor.p({
      type: "primary",
      text: "确定"
    }),
    O: common_vendor.p({
      span: "6"
    }),
    P: common_vendor.o($options.quxiao),
    Q: common_vendor.p({
      type: "primary",
      plain: true,
      text: "取消"
    }),
    R: common_vendor.p({
      span: "6"
    }),
    S: common_vendor.p({
      customStyle: "margin-bottom: 10px"
    }),
    T: common_vendor.p({
      type: "line",
      opts: $data.opts,
      chartData: $data.chartData
    }),
    U: common_vendor.o($options.sendGet),
    V: common_vendor.p({
      type: "primary",
      text: "刷新"
    }),
    W: common_vendor.o(_ctx.click),
    X: common_vendor.p({
      showLoading: true,
      src: $data.url_hb,
      width: "300px",
      height: "350px",
      mode: "aspectFit"
    }),
    Y: common_vendor.o($options.close),
    Z: common_vendor.o($options.open),
    aa: common_vendor.p({
      show: $data.popup_show,
      mode: "center",
      bgColor: "transparent"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/29337/Desktop/add_user/add_user/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
