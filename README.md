# 移动端个人学籍档案界面

基于 [wang-tong/edu-profile](https://github.com/wang-tong/edu-profile) 修改的纯前端手机端界面，包含首页、教育列表、学籍详情及本地资料编辑表单。

单击首页退出图标左侧绿色空白区域可打开编辑页。分享页仅展示信息，无隐藏编辑入口。

GitHub Pages 静态部署不需要服务端令牌。生成的分享链接使用当前站点地址并在 URL 中携带填写的数据；不调用参考作者的存储服务。

## 本地运行

```sh
python3 -m http.server 8768 --bind 127.0.0.1
```

访问 http://127.0.0.1:8768/ 。运行 `node scripts/check-mobile.cjs` 检查脚本及生成 HTML。

这是独立界面演示，不是官方学历查询或验证服务。
