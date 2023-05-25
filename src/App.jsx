'use strict';
import React, { useState, useEffect, memo } from 'react';

import './App.css';

export default memo((props) => {
  return (
    <div className="page">
      <div className="flex-col group">
        <div className="flex-col header">
          <div className="flex-row container">
            <span className="tag">示例图.dwg</span>
            <span className="label">登录</span>
            <span className="word">注册</span>
          </div>
          <div className="flex-row container-1">
            <div className="flex-row wrapper">
              <div className="flex-row location-wrapper-item-0">
                <span className="location">新建</span>
              </div>
              <div className="flex-row location-wrapper-item-1">
                <span className="save">保存</span>
              </div>
            </div>
            <div className="flex-row wrapper-1">
              <div className="empty" />
              <div className="flex-row button-wrapper-item-0">
                <span className="button">平移</span>
              </div>
              <div className="flex-row button-wrapper-item-1">
                <span className="copy">复制</span>
              </div>
              <div className="flex-row button-wrapper-item-2">
                <span className="button-1">粘贴</span>
              </div>
              <div className="flex-row button-wrapper-item-3">
                <span className="btn">旋转</span>
              </div>
              <div className="flex-row button-wrapper-item-4">
                <span className="button-2">放缩</span>
              </div>
              <div className="flex-col list">
                <div className="flex-row row">
                  <span className="word-1">线型</span>
                </div>
                <div className="flex-row row-2">
                  <span className="tag-1">样式</span>
                </div>
                <div className="flex-row row-3">
                  <span className="label-1">标注</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="submain" />
        <div className="flex-row main">
          <div className="flex-row btn-wrapper">
            <span className="btn-1">命令</span>
          </div>
          <div className="flex-col container-2">
            <div className="flex-row button-wrapper-item-0-1">
              <span className="button-3">图层</span>
            </div>
            <div className="flex-row button-wrapper-item-1-1">
              <span className="btn-2">直线</span>
            </div>
            <div className="flex-row button-wrapper-item-2-1">
              <span className="button-4">多段线</span>
            </div>
            <div className="flex-row button-wrapper-item-3-1">
              <span className="btn-3">矩形</span>
            </div>
            <div className="flex-row button-wrapper-item-4-1">
              <span className="btn-4">圆弧</span>
            </div>
          </div>
        </div>
        <div className="flex-row footer">
          <div className="flex-row container-3">
            <div className="flex-row tag-wrapper-item-0">
              <span className="tag-2">布局1</span>
            </div>
            <div className="flex-row tag-wrapper-item-1">
              <span className="tag-3">布局2</span>
            </div>
          </div>
          <div className="flex-row tag-wrapper">
            <span className="tag-4">全屏</span>
          </div>
        </div>
      </div>
    </div>
  );
});
