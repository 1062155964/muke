// 注意Page,P要大写
Page({
	login: function () {
		/**
		 * navigateTo 跳转页面，指定页面为当前页面的子页面，可返回,子页面应该最多只有5级
		 * redirectTo 跳转页面，指定页面不再可以返回当前页面
		 */
		//   wx.navigateTo({
		//       url:"../posts/post"
		//   });
		wx.redirectTo({
			url: '../posts/post'
		})
	}
})