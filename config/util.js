/**
 * 获取当前的开发环境
 */
export const getCurrentEnvVersion = () => {
	const account = uni.getAccountInfoSync();
	return account.miniProgram.envVersion; // develop | trial | release
};

/**
 * 获取当前是否是线上环境
 */
export const isReleaseVersion = () => {
	return getCurrentEnvVersion() == "release";
};

/**
 * 获取当前是否是开发环境
 */
export const isDevelopVersion = () => {
	return getCurrentEnvVersion() == "develop";
};

/**
 * 获取当前是否是体验版环境
 */
export const isTrialVersion = () => {
	return getCurrentEnvVersion() == "trial";
};

/**
 * 获取小程序的app_id
 */
export const getAppId = () => {
	const account = uni.getAccountInfoSync();
	return account.miniProgram.appId;
};

/**
 * 获取当前请求接口的HOST 分别开发、体验、线上环境
 */
export const getRequestHost = () => {
	if (isDevelopVersion()) return "https://httpbin.org";
	else if (isReleaseVersion()) return "https://httpbin.org";
	else return "https://httpbin.org";
};


/**
 * 授权登录换取Code
 */
export const authLoginExchangeCode = () => {
	return Promise((resolve, reject) => {
		uni.login({
			onlyAuthorize: true,
			success: res => {
				console.log("authLogin = ", res)
				resolve(res.code)
			},
			fail: () => {
				reject('authLoginExchangeCode 获取Code失败')
			}
		})
	})
}
