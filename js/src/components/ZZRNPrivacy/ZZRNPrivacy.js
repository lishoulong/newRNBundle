import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ZZRNPrivacyStyle from './ZZRNPrivacyStyle';
import * as Native from '../../libs/native/index';

class ZZRNPrivacy extends Component {
  accountOut = () => {
    const url = 'https://m.zhuanzhuan.58.com/Mzhuanzhuan/Mxieyi/accountOut.html';
    //Native.openUrl(url);
    console.log('url', url);
  }
  render() {
    return (
      <ScrollView style={ZZRNPrivacyStyle.container}>
        <Text style={ZZRNPrivacyStyle.plain}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;转转（ “我们”）尊重并保护所有使用转转平台服务的用户的个人信息及个人隐私。本隐私权条款包含了我们收集、存储、使用、共享和保护用户（“您”）的个人信息的条款，我们希望通过本隐私权条款向您清晰地介绍我们对为您提供的访问、更新、控制和保护您个人信息的方式，因此我们建议您完整地阅读本《转转隐私权条款》（下称“本隐私权条款”）（尤其是加粗的内容），以帮助您了解维护自己隐私权的方式。如果您对本隐私权条款有任何疑问，您可以通过转转客服渠道与我们联系。如果您不同意本隐私权条款的任何内容，您应立即停止使用转转平台服务。当您使用转转平台提供的任一服务时，即表示您已同意我们按照本隐私权条款来合法使用和保护您的个人信息。
        </Text>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>一、定义</Text>
          <Text style={ZZRNPrivacyStyle.plain}>1、转转平台，是指北京转转精神科技有限责任公司旗下运营之转转移动应用软件（APP）。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>2、关联方：指转转平台的经营者及其他与转转存在关联关系的公司的单称或合称。</Text>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>二、适用范围</Text>
          <Text style={ZZRNPrivacyStyle.plain}>为用户提供更好、更优、更个性化的服务是转转坚持不懈的追求，也希望通过我们提供的服务可以使您的生活更方便。本隐私权条款适用于转转平台提供的所有服务（以下称“服务”或“我们的服务”），您访问登录转转平台使用转转平台提供的服务，均适用本隐私权条款。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>此外，针对某些特定服务，我们还将制定特定隐私条款，以便更具体地说明我们在该特定服务中如何收集、处理、存储、使用、共享和保护您的信息。该特定服务的隐私条款构成本隐私条款的一部分。
            <Text style={ZZRNPrivacyStyle.emphsis}>如相关特定服务的隐私条款与本隐私条款有不一致之处，适用该特定服务的隐私条款。</Text>
          </Text>
          <Text style={ZZRNPrivacyStyle.plain}>
            <Text style={ZZRNPrivacyStyle.emphsis}>本隐私权条款不适用于通过我们的服务而接入的其他第三方（“其他第三方”，包括但不限于您的交易相对方、任何第三方网站以及第三方服务提供者）向您提供的服务而收集的信息，我们对前述第三方使用您个人信息的行为及后果不承担任何责任。</Text>
            请您注意，其他第三方可能有自己的隐私权保护条款；当您查看其他第三方创建的网页或使用其他第三方开发的应用程序时，可能会发现该网页或应用程序放置的Cookie或像素标签。这些Cookie或标签不受我们的控制，而且它们的使用不受本隐私权条款的约束。
          </Text>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>三、信息收集</Text>
          <Text style={ZZRNPrivacyStyle.plain}>我们收集信息是为了遵守法律法规的要求，向您提供更好以及更个性化的服务，并努力提高您的用户体验。您可以选择不提供某一或某些相关信息，但是这样可能使您无法成为我们的用户，或无法享受我们提供的某些服务，或者无法达到相关服务拟达到的效果。请您理解，我们使用您提供的信息是为了回应您的要求，为您享受我们提供的二手闲置物品交易等各项服务提供便利，完善我们的服务以及与您进行信息沟通。您向我们提供下述信息或使用我们的服务时，即表示您同意我们按照本隐私权条款规定收集信息。我们收集信息的种类如下：</Text>
          <Text style={ZZRNPrivacyStyle.emphsis}>
            1、您向我们提供的信息
          </Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;为了遵守法律法规的要求，以及向您提供更个性化、更便捷的服务，我们需要识别您的身份，当您通过微信账户注册登录转转账户及您在使用我们的相关服务无时，需要您填写、提交及/或以其他任何方式提供您的个人信息，包括但不限于您的姓名、性别、出生年月日、身份证号码、电话号码、收货地址及相关附加信息（如您地址中的所在省份和城市、邮政编码等）或其他支付工具的账户信息等信息。在您主动注销账号时，我们将根据适用法律法规的要求尽快使其匿名或删除您的个人信息。您在转转发布信息内容过程中所提交的任何文字、照片、视频等各种形式的信息，也可能会包含或者关联到您的个人信息。</Text>
			    <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;请您注意，当您通过微信账户登录转转时，我们将从微信平台获取您授权共享的账户信息（头像、昵称等），并在您同意本隐私政策后将您的微信账户与您的转转账户绑定，使您可以通过微信账户直接登录并使用我们的产品与/或服务。我们会将依据与微信平台的约定、对个人信息来源的合法性进行确认后，在符合相关法律和法规规定的前提下，使用您的这些个人信息。</Text>
			    <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;您可以通过转转为其他人订购商品或服务，您需要提供该实际订购人的前述个人信息。向转转提供该实际订购人的前述个人信息之前，您需确保您已经取得其授权同意。</Text>
          <Text style={ZZRNPrivacyStyle.emphsis}>
            2、我们在您使用服务过程中获得的信息
          </Text>
          <View>
            <Text style={ZZRNPrivacyStyle.plain}>为了提高服务质量和用户体验，我们会留存您使用服务以及相关使用方式的信息，这类信息包括以下内容：</Text>
            <View style={ZZRNPrivacyStyle.contentList}>
              <Text style={ZZRNPrivacyStyle.contentItem}>（1）您的浏览器和计算机上的日志信息。在您使用转转平台服务，或访问转转平台网页时，我们的系统自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（2）您的位置信息。当您开启设备定位功能，下载或使用我们开发的应用程序，或访问移动网页使用我们的服务时，我们可能会读取您的位置（大多数移动设备将允许您关闭定位服务，具体方法建议您联系您的移动设备的服务商或生产商）。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（3）您的设备信息。如您下载或使用转转或其关联公司客户端软件，或访问移动网页使用转转平台服务时，我们可能会读取您访问我们或使用我们服务时所使用的终端设备的信息，包括但不限于设备型号、设备识别码、操作系统、分辨率、电信运营商等。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（4）您的行为、风格和喜好信息。为满足您的服务要求，和向您提供更加个性化的服务，我们可能会记录您访问我们或使用我们服务时所进行的搜索和其他操作、记录您的收藏/爱好等信息。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（5）除上述信息外，我们还可能为了提供服务及改进服务质量的合理需要而收集您的其他信息，包括您与我们的客户服务团队联系时所提供的相关信息，您参与问卷调查时向我们发送的问卷答复信息，以及您与转转的关联方、转转合作伙伴之间互动时我们获得的相关信息。同时，为提高您使用转转平台提供的服务的安全性，更准确地预防钓鱼网站欺诈和木马病毒，我们可能会通过了解一些您的网络使用习惯、您常用的软件信息等手段来判断您账户的风险，并可能会记录一些我们认为有风险的链接（“URL”）。</Text>
            </View>
            <Text style={ZZRNPrivacyStyle.plain}>
              <Text style={ZZRNPrivacyStyle.emphsis}>请您理解，单独的设备信息、日志信息等是无法识别特定自然人身份的信息。</Text>
              如果我们将这类非个人信息与其他信息结合用于识别特定自然人身份，或者将其与个人信息结合使用，则在结合使用期间，这类非个人信息将被视为个人信息，除取得您授权或法律法规另有规定外，我们会将该类个人信息做匿名化、去标识化处理，请您了解并同意，在此情况下我们有权使用已经去标识化的信息；并在不透露您个人信息的前提下，我们有权对用户数据库进行分析并予以商业化的利用。
            </Text>
          </View>
          <Text style={ZZRNPrivacyStyle.emphsis}>
            3、我们通过间接获得方式获得的您的个人信息
          </Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;为确认交易状态及为您提供售后与争议解决服务，我们会通过您基于交易所选择的交易对象、支付机构、物流公司等收集与交易进度相关的您的交易、支付、物流信息，或将您的交易信息共享给上述服务提供者。</Text>
          <Text style={ZZRNPrivacyStyle.emphsis}>
            4、为您提供安全保障而获得的您的个人信息
          </Text>
          <Text style={ZZRNPrivacyStyle.plain}>
            请注意，为确保用户身份真实性、
            <Text style={ZZRNPrivacyStyle.emphsis}>向您提供更好的安全保障，您可以向我们提供身份信息（身份证、军官证、护照、驾驶证、社保卡、居住证等身份信息）、</Text>
            面部特征等生物识别信息、芝麻信用等个人敏感信息完成实名或者信用认证。如您拒绝提供上述信息，可能无法使用账户管理继续可能存在风险的交易等服务，但不会影响您使用信息浏览、搜索等服务。
          </Text>
          <Text style={ZZRNPrivacyStyle.plain}>
            &nbsp;&nbsp;为了给您提供更好、更优、更加个性化、更具安全性的服务，保护您或其他用户或公众的人身财产安全免遭侵害，更好地预防钓鱼网站、欺诈、网络漏洞、计算机病毒、网络攻击、网络侵入等安全风险，更准确地识别违反法律法规或转转相关协议规则的情况，
            <Text style={ZZRNPrivacyStyle.emphsis}>我们可能使用或整合您的用户信息、交易信息、设备信息、有关网络日志以及转转的关联方、合作伙伴及其他独立第三方来源依据法律的规定或征得您授权同意的前提下，向转转分享您的个人信息，来综合判断您账户及交易风险、进行身份验证、检测及防范安全事件，并依法采取必要的记录、审计、分析、处置措施。</Text>
          </Text>
          <Text style={ZZRNPrivacyStyle.emphsis}>
            5、征得授权同意的例外
          </Text>
          <View>
            <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;根据相关法律法规规定，以下情形中收集您的个人信息无需征得您的授权同意：</Text>
            <View style={ZZRNPrivacyStyle.contentList}>
              <Text style={ZZRNPrivacyStyle.contentItem}>（1）与国家安全、国防安全有关的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（2）与公共安全、公共卫生、重大公共利益有关的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（3）与犯罪侦查、起诉、审判和判决执行等有关的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（4）出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（5）所收集的个人信息是您自行向社会公众公开的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（6）从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（7）根据您的要求签订合同所必需的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（8）用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（9）为合法的新闻报道所必需的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（10）学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（11）法律法规规定的其他情形。</Text>           
            </View>
            <Text style={ZZRNPrivacyStyle.plain}>
              <Text style={ZZRNPrivacyStyle.emphsis}>请您注意，您在使用我们的产品与/或服务时所提供的所有个人信息，除非您删除或通过系统设置拒绝我们收集，否则将在您使用我们的产品与/或服务期间持续授权我们使用。在您注销账号时，我们将停止使用并删除您的个人信息。</Text>
              如我们停止运营转转产品或服务，我们将及时停止继续收集您个人信息的活动，将停止运营的通知以逐一送达或公告的形式通知您，对所持有的个人信息进行删除或匿名化处理。            
            </Text>
            <Text style={ZZRNPrivacyStyle.plain}>
              <Text style={ZZRNPrivacyStyle.emphsis}>您知悉并认可：转转可能会与第三方合作向用户提供相关的网络服务，在此情况下，如转转旗下相应主体已与该第三方签署了适当的保密条款，则转转有权将用户的注册信息等资料提供给该第三方，</Text>
              并要求该第三方按照我们的隐私权条款以及其他任何相关的保密和安全措施来为我们处理上述信息。另外，在不透露单个用户隐私资料的前提下，转转有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。转转可能会对网络服务使用情况进行统计。同时，转转可能会与公众分享这些统计信息，以展示我们服务的整体使用趋势。但这些统计信息不包含您的任何身份识别信息。            
            </Text>
          </View>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>四、信息使用的目的和方式</Text>
          <View>
            <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;为向您提供服务、提升我们的服务质量以及优化您的服务体验，我们会在符合法律规定或根据您授权的情况下使用您的个人信息，并主要用于下列用途：</Text>
            <View style={ZZRNPrivacyStyle.contentList}>
              <Text style={ZZRNPrivacyStyle.contentItem}>1、向您提供您使用的各项服务，并维护、改进这些服务。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>2、我们可能使用您提供的个人信息中的联系方式与您通信，例如通知您有关您的账户、安全性更新、产品和服务信息。 为了更好的为您提供服务，请您及时查看转转发送的相关信息。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>3、向您推荐您可能感兴趣的内容，包括但不限于向您发出产品和服务信息，或通过系统向您展示个性化的第三方推广信息，或者根据本隐私权条款与转转的合作伙伴共享信息以便他们向您发送有关其产品和服务的信息。如果您不希望接收上述信息，可通过相应的退订功能进行退订。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>4、我们可能使用您的个人信息以验证身份，预防、发现、调查欺诈、危害安全、非法或违反与我们或其关联方协议、政策或规则的行为，以保护您、其他我们用户，或我们或其关联方的合法权益。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>5、我们可能会将来自某项服务的个人信息、交易信息与来自其他服务所获得的信息结合起来，进行综合统计、分析或加工等处理，用于为了给您提供更加个性化的服务使用，例如让您拥有更广泛的社交圈的需要而使用、共享或披露。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>6、我们会对我们的服务使用情况进行统计，并可能会与公众或第三方分享这些统计信息，以展示我们的产品或服务的整体使用趋势。但这些统计信息不包含您的任何身份识别信息。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>7、让您参与有关我们产品及服务的调查。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>8、经您同意或授权的其他用途。</Text>         
            </View>
          </View>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>五、信息共享</Text>
          <View>
            <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;您的个人信息是我们为您提供服务的重要部分，我们会遵循法律规定对您的信息承担保密义务。除以下情形外，我们不会将您的个人信息披露给第三方：</Text>
            <View style={ZZRNPrivacyStyle.contentList}>
              <Text style={ZZRNPrivacyStyle.contentItem}>1、事先获得您或您的监护人的同意或授权；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>2、为免除您在生命、身体或财产方面的紧急危险；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>3、根据法律法规的规定或行政、司法机构的要求；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>4、出于实现“我们对您个人信息的使用”部分所述目的，或为履行我们在《转转软件许可使用协议》或本隐私权条款中的义务和行使我们的权利，向转转的关联方分享您的信息；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>5、向合作伙伴提供您的信息，前提是转转旗下相应主体已与该第三方签署了适当的保密条款；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>6、我们与第三方进行联合营销活动，我们可能与其共享活动过程中产生的、为完成活动所必要的个人信息，如参加活动的用户数、中奖名单、中奖人联系方式等，以便第三方能及时向您发放奖品；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>7、以学术研究或公共利益为目的，且无害于您的重大利益；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>8、如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>9、只有共享您的信息，才能提供您需要的服务，或处理您与他人的纠纷或争议。例如您在转转上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，转转会视情况向该用户提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>10、根据法律规定及合理商业习惯，在我们计划与其他公司合并或被其收购或进行其他资本市场活动（包括但不限于IPO，债券发行）时，以及其他情形下我们需要接受来自其他主体的尽职调查时，我们会把您的信息提供给必要的主体，但我们会通过和这些主体签署保密协议等方式要求其对您的个人信息采取合理的保密措施；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>11、您通过点击相关产品的相应按键同意向第三方提交个人信息；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>12、如您出现违反中国有关法律、法规或者违反您与我们签署的相关协议（包括在线签署的电子协议）及相关规则时，需要向第三方披露；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>13、为维护转转及其关联方或用户的合法权益；</Text>
            </View>
          </View>
          <Text style={ZZRNPrivacyStyle.emphsis}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，请您谨慎考虑通过我们的服务上传、发布和交流的信息内容。在一些情况下，您可通过我们某些服务的隐私设定来控制有权浏览您共享信息的用户范围。如要求从我们的服务中删除您的相关信息，请通过该等特别服务条款提供的方式操作。</Text>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>六、Cookie和网络Beacon的使用</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为使您获得更轻松的访问体验，您访问转转平台相关网站或使用转转平台提供的服务时，我们可能会通过小型数据文件识别您的身份，这么做是帮您省去重复输入注册信息的步骤，或者帮助判断您的账户安全。这些数据文件可能是Cookie，Flash Cookie，或您的浏览器或关联应用程序提供的其他本地存储（统称“Cookie”）。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请您理解，我们的某些服务只能通过使用“Cookie”才可得到实现。如果您的浏览器或浏览器附加服务允许，您可以在相关的页面修改对Cookie的接受程度或者拒绝转转的Cookie，但这一举动在某些情况下可能会影响您安全访问转转相关网站和使用转转平台提供的服务。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网页上常会包含一些电子图象（称为“单像素” GIF 文件或 “网络 beacon”），使用网络beacon可以帮助网站计算浏览网页的用户或访问某些cookie，我们会通过网络beacon收集您浏览网页活动的信息，例如您访问的页面地址、您先前访问的援引页面的位址、您停留在页面的时间、您的浏览环境以及显示设定等。</Text>
          <View>
            <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;转转可能使用您在转转网站浏览的行为数据，根据您的兴趣喜好，在您浏览其他网站时有可能展现与您兴趣相关的广告内容，这是转转使用的广告定向功能，这个过程包括以下几个方面：</Text>
            <View style={ZZRNPrivacyStyle.contentList}>
              <Text style={ZZRNPrivacyStyle.contentItem}>1)兴趣数据的收集：我们通过您在转转浏览过的内容，使用Cookie收集并保存您的行为数据。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>2)根据您的浏览行为数据，获取您的兴趣分类。例如您最近两天寻找北京搬家公司信息，我们会了解您的兴趣是北京的搬家公司。</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>3)广告定向功能：我们了解您的兴趣后，当您浏览其他网站时，转转可能通过RTB广告系统或58自有联盟，向您推送搬家相关的广告，以满足您的兴趣需要。
                <Text style={ZZRNPrivacyStyle.emphsis}>如果您不希望在其他网站中看到针对用户兴趣投放的转转推广内容，请点击禁用/关闭。</Text>
              </Text>            
            </View>
          </View>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>七、信息存储</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;转转收集的有关您的信息和资料将保存在转转及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或转转收集信息和资料所在地并在该地被访问、存储和展示。我们将在实现本隐私条款中所述目的所必需的期间内保留您的个人信息，除非法律要求或允许在更长的期间内保留这些信息。</Text>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>八、您的个人信息的查询及变更 </Text>
          <Text style={ZZRNPrivacyStyle.plain}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、无论您何时使用我们的服务，我们都会力求让您顺利访问自己的个人信息。如果这些信息有误，我们会努力提供各种方式来让您快速更新信息或删除信息（除非我们出于合法业务或法律方面的原因而必须保留这些信息）。
            <Text style={ZZRNPrivacyStyle.emphsis}>如果您认为转转存在违反法律、行政法规的规定或者与您的约定收集、使用您个人信息的，您可以通过转转平台客服渠道与我们取得联系。</Text>
          </Text>
          <Text style={ZZRNPrivacyStyle.plain}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、<Text style={ZZRNPrivacyStyle.emphsis}>您可以自行登录您的账户对您的个人信息进行查询及更新。</Text>
            您也可以通过删除信息、关闭设备功能等方式改变您授权我们继续收集个人信息的范围或撤回您的授权；或通过注销账户的方式，撤回我们继续收集您个人信息的全部授权。当您在我们的产品中直接申请注销账户时，关于您注销账户的方式以及您应满足的条件，请详见
            <Text style={ZZRNPrivacyStyle.plain} onPress={() => this.accountOut()}>《转转账户注销须知》</Text>
            您注销账户后，我们将停止为您提供产品与/或服务，并根据您的要求，除法律法规另有规定外，我们将删除您的个人信息。
          </Text>
          <View>
            <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、当您请求转转平台协助更新/删除您的个人信息时，我们可能会先要求您验证自己的身份，然后再处理您的请求。对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情收取一定成本费用。对于那些无端重复、需要过多技术手段（例如需要开发新系统或从根本上改变现行惯例）、给他人隐私权带来风险或者非常不切实际（例如涉及备份磁带上存放的信息）的请求，我们可能会予以拒绝。</Text>
            <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在以下情形中，按照法律法规要求，我们将无法响应您的请求：</Text>
            <View style={ZZRNPrivacyStyle.contentList}>
              <Text style={ZZRNPrivacyStyle.contentItem}>（1）与国家安全、国防安全有关的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（2）与公共安全、公共卫生、重大公共利益有关的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（3）与犯罪侦查、起诉、审判和执行判决等有关的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（4）有充分证据表明个人信息主体存在主观恶意或滥用权利的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（5）响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；</Text>
              <Text style={ZZRNPrivacyStyle.contentItem}>（6）涉及商业秘密的。</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>九、您的个人信息保护</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、我们会采取合理可行的措施，尽力避免收集无关的个人信息。我们仅在本隐私条款所述目的所必需的期间和法律法规要求的时限内保留您的个人信息。为保障您的信息安全，我们努力采取各种合理的物理、电子和管理方面的安全措施来保护您的信息，使您的信息不会被泄漏、毁损或者丢失，包括但不限于SSL、通过https等方式提供浏览服务、信息加密存储、数据中心的访问控制等。我们对可能接触到您的信息的员工或外包人员也采取了严格管理，包括但不限于根据岗位的不同采取不同的权限控制，与他们签署保密协议，监控他们的操作情况等措施。转转会按现有技术提供相应的安全措施来保护您的信息，提供合理的安全保障，转转将尽力做到使您的信息不被泄漏、毁损或丢失。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、您的账户均有安全保护功能，请妥善保管您的微信账户、手机号及验证码信息。转转将通过向其它服务器备份等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您理解，由于技术的限制以及可能存在的各种恶意手段，即便竭尽所能加强安全措施，在信息网络上也不存在“完善的安全措施”。
            <Text style={ZZRNPrivacyStyle.emphsis}>我们强烈建议您不要使用非转转推荐的通信方式发送个人信息。</Text>
            如因您自己的原因导致账户、手机号码及验证码信息泄露而造成的任何法律后果需由您本人负责。
          </Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、在使用转转平台服务进行网上交易时，如您不可避免地要向交易对方或潜在的交易对方披露自己的个人信息（例如联系人、联络方式等），请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息已经被泄露或者存在被泄露的可能，且有可能会危及您注册登录获得的转转账户安全，或者给您造成其他的损失的，请您务必在第一时间通知转转客服，以便转转采取相应措施维护您的转转账户安全，防止损失的发生或者进一步扩大。为避免疑义，如果您未在第一时间通知转转客服，则您应自行承担由此给您造成的损失（及扩大的损失）。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、请注意，您在使用我们服务时自愿共享甚至公开分享的信息，可能会涉及您或他人的个人信息甚至个人敏感信息，如您在评价时选择上传包含个人信息的图片。请您更加谨慎地考虑，是否在使用我们的服务时共享甚至公开分享相关信息。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、如果我们的物理、技术或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改或毁坏，导致您的合法权益受损，我们将承担相应的法律责任。在不幸发生个人信息安全事件后，我们将按照法律法规的要求向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。事件相关情况我们将以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，上报个人信息安全事件的处置情况。</Text>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>十、未成年人保护</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;未满十八岁的未成年人应在其父母或监护人指导下使用我们的服务，如果没有父母或监护人的同意，未成年人不得创建自己的用户账户。如您为未成年人的，我们建议您的父母或监护人仔细阅读本隐私权条款并在提交的个人信息之前寻求您的父母或监护人的同意和指导，未成年人一旦使用本网站，我们视为有未成年人父母或监护人的同意或指导。</Text>
        </View>
        <View>
          <Text style={ZZRNPrivacyStyle.headerh2}>十一、其他</Text>
          <Text style={ZZRNPrivacyStyle.plain}>1、您应理解按本协议约定使用转转，按规范使用许可软件、按本协议约定履行义务是您获取转转授权使用软件、提供转转服务的前提，如您严重违反本协议，转转将终止提供服务，本协议终止。在本使用许可终止时，您应停止对许可软件的使用行为, 并销毁许可软件的全部副本。您在协议终止前的行为所导致的任何责任，您应完全且独立地承担。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、如您对本隐私权条款有任何疑问或您提供的上述个人信息受到了侵扰，您可以通过转转平台客服中心与我们联系，我们将在接到投诉后尽快给予您答复。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、为给您提供更好的服务，我们的业务将不时变化，本隐私条款也将随之调整。我们会通过在我们移动应用软件上挂出更新版本或以其他方式提醒您相关内容的更新，也请您访问我们以便及时了解最新的隐私条款。在前述情况下，若您仍继续使用转转提供的服务，即表示您同意受经修订本隐私权条款的约束。我们鼓励您定期地查阅本网页上关于我们隐私实践的最新信息。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、转转将致力于保障您个人信息的私密性和安全性，并让您能够自主控制。本隐私权条款属于《转转软件许可使用协议》不可分割的有效组成部分。</Text>
          <Text style={ZZRNPrivacyStyle.plain}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、您可以通过转转客服渠道（我的-客服中心）与我们联系，我们将在收到您的请求后的合理时间内给您回复。如果您对我们的回复不满意，特别是您认为我们的个人信息处理行为损害了您的合法权益，
            <Text style={ZZRNPrivacyStyle.emphsis}>您还可以通过向被告住所地有管辖权的法院提起诉讼来寻求解决方案。</Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

module.exports = ZZRNPrivacy;