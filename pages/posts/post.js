/*
 * @Author: pickle_tiger 
 * @Date: 2018-04-17 13:24:15 
 * @Last Modified by:   pickle_tiger 
 * @Last Modified time: 2018-04-17 13:24:15 
 */
var postsData = require('../../data/posts-data.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		this.setData({
			posts_key: postsData.postList
		});

	}
})