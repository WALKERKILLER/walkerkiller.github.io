---
title: 【实用软件分享】MusicFree
katex: true
date: 2025-11-9 0:00:00
updated: 2025-11-9 0:00:00
tags:
  - 软件分享
  - 音乐
categories:
  - 杂谈
---
在逛linux.do的时候发现了一款支持多平台聚合的开源音乐播放器[MusicFree](https://musicfree.catcat.work/)，类似于Mihon.app这类的漫画软件，通过添加⌈插件⌋的方式来实现多平台音乐播放，支持安卓和win双端使用。
下面是一些预览和基本配置项目。
## 获取地址
1. 官网：[MusicFree | MusicFree](https://musicfree.catcat.work/)
2. Github仓库地址：[maotoumao/MusicFree: 插件化、定制化、无广告的免费音乐播放器](https://github.com/maotoumao/MusicFree)
3. 作者微信公众号：**一只猫头猫**下回复”MusicFree“
## 基本预览
1. 配置好的桌面端预览示例

![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20251109175042999.png)


![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20251109175130582.png)


2. 配置好的移动端预览示例

![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20251109175221381.png)


整体界面在设置上自定义也是比较丰富的，桌面端还有独立的主题市场，里面有一些作者和其他的用户制作的精美主题，你也可以制作自己的主题然后去themepacks的仓库[maotoumao/MusicFreeThemePacks: MusicFreeDesktop版的主题包](https://github.com/maotoumao/MusicFreeThemePacks)提交PR，当然桌面端也存在没有大屏模式，手机端只有歌词卡片的显示方式等等的小瑕疵。但是总体上美观程度还是很高的。
功能性上主要跟你导入的插件规则有关，有些规则无法实现查看评论和歌词翻译翻译（如某抑），有些规则无法实现查看歌词（如某b，油管），但是软件提供了本地上传和外部查找的功能，就算某规则下存在这些问题，你可以通过本地上传歌词/翻译或者从其他规则查找匹配歌词来实现补充。播放和下载音质也都有标准、高、超高三种选择，可以实现非发烧友的基本需求。
歌单功能也是跟插件有关，你可以通过插件解析你在其他音乐平台的歌单导入到本软件中使用。但是并不支持导入某些平台的每日推荐（可以通过建立一个空白歌单将所有音乐复制到空白歌单的方法实现），你也可以通过配置WebDAV的方式来播放你云服务器上储存的音乐。
![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20251109173400230.png)
## 插件源及配置
本软件提供了【从本地文件安装插件】和【从网络安装插件】两种方式，实现原理如来自官网的流程图所示：

![image.png](https://picgo-1385161956.cos.ap-shanghai.myqcloud.com/imgs/20251109174108473.png)

总而言之，你安装的插件是一个在本地或者云上的json文件，里面包含了实现规则的一系列元数据，这里提供一个来自于[xxnuo/MusicFreePluginsHub: MusicFree 源插件订阅聚合器 - 订阅全网大全](https://github.com/xxnuo/MusicFreePluginsHub)仓库的懒人订阅源：https://musicfreepluginshub.2020818.xyz/plugins.json，直接复制到软件输入【从网络安装插件即可】，由于涉及到后续插件获取更新和个人插件开发，你也可以Fork本仓库并启用Github Actions，配置自己的订阅链接。
## 个人插件开发
此处开发者给出了教程，直接引用：[MusicFree插件原理](https://mp.weixin.qq.com/s/pjyOjTDrV85ImRQ6EWbgAg)
插件本质上是一个 **导出特定数据结构** 的 `Common JS 模块`。理论上通过一定的调用，你可以把某b等视频平台作为音源。

## 声明
> 本软件不涉及任何与”破解VIP”有关的行为，插件的解释权归插件开发者所有。


