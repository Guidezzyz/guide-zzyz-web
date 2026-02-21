import React from 'react';
// 1. 导入组件（注意路径要指向你的 PostBrowser 文件）

import PostViewer from '../community/posts/postviewer';

const Community: React.FC = () => {
  return (
    <div className="Community">
      <header>
        <h1>我的社交应用</h1>
      </header>
      
      <main>
        {/* 2. 像使用 HTML 标签一样调用它 */}
        <PostViewer />
      </main>
    </div>
  );
};

export default Community;
