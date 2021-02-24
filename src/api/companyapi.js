import {
    wxRequest
} from '../utils/wxrequest';

// const apimall = 'http://192.168.1.85:8080/emobile-kpt';
const apimall = 'https://m.51jrq.com/emobile-kpt';
const apiGps = 'https://apis.map.qq.com/ws/geocoder/v1';

// 用户登录
const  loginIn = (params) => wxRequest(params, apimall + '/api/hr/login');

// 获取数据字典数据
const  getDictData = (params) => wxRequest(params, apimall + '/api/hr/dictionary');

// 获取企业信息
const  getCompanyInfo = (params) => wxRequest(params, apimall + '/api/hr/job');

// 修改个人信息&&获取注册时短信验证码
const  changeInfo = (params) => wxRequest(params, apimall + '/api/hr/regc');

// 获取职位列表
const  getJobList = (params) => wxRequest(params, apimall + '/api/hr/joblist');

//获取我的收藏及投递记录
const  getCollectJob = (params) => wxRequest(params, apimall + '/api/hr/selruser');

//获取我的收藏及投递记录
const  collectResume = (params) => wxRequest(params, apimall + '/api/hr/userjob');

//查询求职者信息列表
const  getPinfoList = (params) => wxRequest(params, apimall + '/api/hr/pinfo');

// ====================================================================================================================

//得到首页banner图片列表
// const getMobileHomeBanner = (params) => wxRequest(params, apimall + '/api/ad_show/getMobileHomeBanner');

//获取职位
// const  getCompanyjob = (params) => wxRequest(params, apimall + '/api/companyjob');

//获取公司列表
// const  getCompanyList = (params) => wxRequest(params, apimall + '/api/company');

//查找公司
// const  searchCorp = (params) => wxRequest(params, apimall + '/api/imain');

//地址解析
const getCityName = (params) => wxRequest(params, apiGps + `/?address=${params.address}&key=RULBZ-ZPFRX-4XV4F-7NALT-RMEQV-Y3BVT`);

//获取小程序码
const getWxaCode = (params) => wxRequest(params, apimall + '/wx/createwxaqrcode');

//获取个人信息
const getPimg = (params) => wxRequest(params, apimall + '/api/pimg');

//图片转base64
const trBase64 = (params) => wxRequest(params, apimall + '/img/index');

//获取access_token
var getAccessToken = (params) => wxRequest(params, apimall + '/wx/get');


// 获取简历信息
const  getResumeInfo = (params) => wxRequest(params, apimall + '/api/my');


// 简历详情查看(外网渠道)
const  getWResumeInfo = (params) => wxRequest(params, apimall + '/api/hr/resumeview');

// 个人用户注册获取短信验证码
const  getVerifyCode = (params) => wxRequest(params, apimall + '/api/regphone');

// 修改头像
const  changeHeadImg = (params) => wxRequest(params, apimall + '/api/pimg');

// 导入简历
const  importResume = (params) => wxRequest(params, apimall + '/api/importResume');

// 找回密码
const  resetPassword = (params) => wxRequest(params, apimall + '/api/password_old');

// 简历投递流程
const  getProcessView = (params) => wxRequest(params, apimall + '/api/ai/deliveryprocess');

//关闭职位
const  closeJob = (params) => wxRequest(params, apimall + '/api/hr/closejob');

//职能推荐简历列表
const  getReclist = (params) => wxRequest(params, apimall + '/api/hr/reclist');

//职能推荐简历信息
const  getPinfodetail = (params) => wxRequest(params, apimall + '/api/hr/pinfodetail');

//获取首页职业列表
const  getListjob = (params) => wxRequest(params, apimall + '/api/hr/listjob');

//获取职位基本信息
const  getJobInfo = (params) => wxRequest(params, apimall + '/api/hr/getjob');

//得到公司的各类信息
const  getCorpinfo = (params) => wxRequest(params, apimall + '/api/hr/corpinfo');

//查看联系方式
const  getLockresume = (params) => wxRequest(params, apimall + '/api/hr/lockresume');

//到面服务列表
const  getInterviewlist = (params) => wxRequest(params, apimall + '/api/hr/getInterviewOfferList');

//简历添加收藏
const  addjzcollect = (params) => wxRequest(params, apimall + '/api/hr/addjzcollect');

//简历取消收藏
const  deljzcollect = (params) => wxRequest(params, apimall + '/api/hr/deljzcollect');

//简历已下载列表
const  getViewedlist = (params) => wxRequest(params, apimall + '/api/hr/viewedlist');

//确认约面
const  interviewConfirm = (params) => wxRequest(params, apimall + '/api/hr/interviewConfirm');

//获取投递简历
const  getReceivedResume = (params) => wxRequest(params, apimall + '/api/hr/receivedResume');

//投递简历合适/不合适/面试邀约状态修改
const  changeStatus = (params) => wxRequest(params, apimall + '/api/hr/suittype');

//个人信息编辑并保存
const  changeUserInfo = (params) => wxRequest(params, apimall + '/api/hr/updateuser');

//简历查看联系方式(外网渠道)
const  getResumedown = (params) => wxRequest(params, apimall + '/api/hr/resumedown');


//简历查看联系方式(外网渠道)
const  getViewContract = (params) => wxRequest(params, apimall + '/api/hr/viewContract');

//验证码登录
const  getLoginCode = (params) => wxRequest(params, apimall + '/api/hr/sendVerificationCode');

//验证码登录
const  pcenter = (params) => wxRequest(params, apimall + '/api/hr/pcenter');


module.exports = {
    loginIn,
    getDictData,
    getCompanyInfo,
    changeInfo,
    getJobList,
    getCollectJob,
    collectResume,
    getPinfoList,
    // ================================
    apimall,
    // getMobileHomeBanner,
    // getCompanyjob,
    // searchCorp,
    // getCompanyList,
    getCityName,
    getWxaCode,
    getPimg,
    trBase64,
    getAccessToken,
    getResumeInfo,
    getVerifyCode,
    importResume,
    changeHeadImg,
    resetPassword,
    getProcessView,
    closeJob,
    getReclist,
    getPinfodetail,
    getListjob,
    getJobInfo,
    getCorpinfo,
    getLockresume,
    getInterviewlist,
    addjzcollect,
    deljzcollect,
    getViewedlist,
    interviewConfirm,
    getReceivedResume,
    changeStatus,
    changeUserInfo,
    getWResumeInfo,
    getResumedown,
    getViewContract,
    getLoginCode,
    pcenter
}
