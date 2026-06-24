const courseModules = [
  {
    number: "01", direction: "视觉设计方向", title: "AI绘画", icon: "▧", slug: "ai-painting",
    color: "#f27767", color2: "#f6a45f", soft: "#fff0e9",
    description: "从基础出图到商业视觉系统，训练学员独立完成品牌、广告、电商、游戏与影视概念类设计项目。",
    lessons: ["图像生成基础","风格迁移","光影处理","色彩搭配","插画创作","广告海报设计","品牌VI制作","电商Banner设计","游戏角色概念图","影视概念图","多风格融合","高分辨率输出","场景整合","作品组合","创意项目管理"],
    ability: "能够从需求分析、风格定位、提示词设计到成图优化、版式整合和作品集呈现，独立完成商业视觉设计项目，并具备品牌、电商、广告与概念设计的交付意识。",
    jobs: ["AI视觉设计师","品牌设计师","广告设计师","电商美工/视觉设计","游戏角色概念设计","影视概念设计助理","插画师","新媒体视觉设计"],
    salary: "5k–15k/月"
  },
  {
    number: "02", direction: "商业视频方向", title: "AI视频", icon: "▶", slug: "ai-video",
    color: "#6b6ff5", color2: "#a069ed", soft: "#efefff",
    description: "覆盖分镜、生成、剪辑、特效和成片输出，帮助学员完成宣传短片、剧情漫画或 MV 级视觉短视频。",
    lessons: ["短视频生成","视频剪辑","动作捕捉","漫剧制作","分镜设计","镜头切换","字幕生成","音频同步","特效添加","多场景整合","广告短片制作","1分钟成片输出","MV制作","视频色彩校正","项目规划"],
    ability: "能够完成从脚本分镜、素材生成、镜头组接、字幕包装、音画同步到成片输出的完整流程，独立制作商业宣传短片、剧情漫画、账号短视频或 MV 风格作品。",
    jobs: ["AI视频制作师","视频剪辑师","短视频内容创作者","动画制作助理","漫剧制作师","信息流广告视频设计","短视频导演助理"],
    salary: "6k–18k/月"
  },
  {
    number: "03", direction: "声音内容方向", title: "AI音乐/声音", icon: "≋", slug: "ai-audio",
    color: "#3bb983", color2: "#81cf73", soft: "#eaf8ef",
    description: "训练配乐、配音、语音克隆、数字人语音与音效整合能力，让视频和广告具备完整听觉表现力。",
    lessons: ["背景音乐生成","风格选择","混音","多轨编辑","音效设计","AI配音","语音克隆","情感语音","数字人语音","视频配音整合","剪辑处理","自动混音","广告音频制作","同步处理","音效创新"],
    ability: "能够围绕广告、短视频、数字人和剧情内容完成配乐、音效、配音、语音克隆与后期混音，让作品具备完整的听觉层次和商业呈现质量。",
    jobs: ["AI配音师","音效设计师","短视频音频制作","数字人语音制作","广告音频制作","播客/课程音频剪辑","音乐内容编辑"],
    salary: "5k–15k/月"
  },
  {
    number: "04", direction: "软件开发方向", title: "AI编程", icon: "&lt;/&gt;", slug: "ai-code",
    color: "#298bd8", color2: "#49c6ce", soft: "#e9f6fb",
    description: "通过 AI 辅助开发，把网页、小程序、工具 APP、可视化和部署上线串成完整产品级开发流程。",
    lessons: ["HTML/CSS基础","JS交互","前端布局","响应式设计","小程序开发","工具类APP开发","数据处理","动态功能","AI接口整合","API处理","用户交互","小游戏开发","自动化工具实现","部署上线","项目流程管理"],
    ability: "能够借助 AI 完成需求拆解、页面搭建、交互实现、接口调用、调试测试和部署上线，独立开发可使用的网站、小程序或工具类 APP。",
    jobs: ["前端开发工程师","AI应用开发助理","工具开发工程师","小程序开发","低代码/自动化开发","Web产品原型开发","数据可视化开发"],
    salary: "6k–20k/月"
  },
  {
    number: "05", direction: "企业效率方向", title: "AI办公", icon: "▤", slug: "ai-office",
    color: "#e8a32d", color2: "#f2c554", soft: "#fff6df",
    description: "围绕企业真实办公流程，训练文档、PPT、数据、图表、报告和文案的自动化产出能力。",
    lessons: ["文档生成","自动排版","PPT制作","数据清洗","Excel公式","数据分析","可视化","分析报告","高级文案","多风格输出","批量处理","工作总结","项目报告","企业营销文案","办公自动化流程"],
    ability: "能够把会议记录、业务数据、销售材料和营销需求快速转化为企业级文档、PPT、报表、分析结论和可直接使用的商业文案。",
    jobs: ["AI办公专员","数据分析助理","内容策划","企业运营助理","销售支持/商务助理","行政文档专员","新媒体文案","职场效率顾问"],
    salary: "5k–15k/月"
  },
  {
    number: "06", direction: "产品管理方向", title: "AI产品经理", icon: "◇", slug: "ai-product",
    color: "#18aa9a", color2: "#318bd3", soft: "#e7f8f5",
    description: "以产品全流程为主线，训练从需求分析、竞品研究、原型设计到迭代规划和项目交付的完整能力。",
    lessons: ["BRD","MRD","PRD","DRD","用户调研","竞品分析","功能列表","原型设计","原型交互","功能迭代","优先级决策","路线图","AI文档辅助","团队协作","产品交付"],
    ability: "能够围绕 AI 应用完成用户调研、竞品分析、需求文档、原型设计、迭代规划、团队协作和项目复盘，具备初级到中级产品岗位的完整工作方法。",
    jobs: ["AI产品经理","产品经理助理","产品策划","AI应用产品专员","项目经理助理","需求分析师","B端产品助理","运营产品专员"],
    salary: "8k–20k/月"
  }
];

const courseModulesRoot = document.querySelector("#course-modules");
const employmentDescription = "岗位覆盖从助理执行到项目交付型岗位，既能面向零基础转型，也能支持在职人员做技能升级。";

if (courseModulesRoot) {
  courseModulesRoot.innerHTML = courseModules.map((module) => `
    <details class="course-module reveal" id="course-${module.slug}" style="--module-color:${module.color};--module-color-2:${module.color2};--module-soft:${module.soft};">
      <summary class="module-header">
        <div class="module-label"><i></i>课程模块 ${module.number} · ${module.direction}</div>
        <h3>${module.title}</h3>
        <p>${module.description}</p>
        <div class="module-icon" aria-hidden="true">${module.icon}</div>
        <div class="module-toggle-hint">
          <span class="collapsed-label">展开课程内容</span>
          <span class="expanded-label">收起课程内容</span>
          <i aria-hidden="true">
            <svg viewBox="0 0 20 20" focusable="false">
              <path d="M5 7.5L10 12.5L15 7.5"></path>
            </svg>
          </i>
        </div>
      </summary>
      <div class="module-body">
        <section class="module-lessons">
          <div class="module-card-title"><b>15</b><h4>教学内容</h4></div>
          <div class="lesson-grid">
            ${module.lessons.map((lesson, index) => `
              <div class="lesson-item"><span>${String(index + 1).padStart(2, "0")}</span><p>${lesson}</p></div>
            `).join("")}
          </div>
        </section>
        <aside class="module-side">
          <section class="module-info-card">
            <div class="info-card-heading"><i>✓</i><h4>学生最终能力</h4></div>
            <p>${module.ability}</p>
          </section>
          <section class="module-info-card">
            <div class="info-card-heading"><i>↗</i><h4>就业连接</h4></div>
            <p>${employmentDescription}</p>
            <div class="job-chips">${module.jobs.map((job) => `<span class="job-chip">${job}</span>`).join("")}</div>
          </section>
          <section class="module-info-card salary-card">
            <div class="info-card-heading"><i>¥</i><h4>参考薪资</h4></div>
            <strong class="module-salary">${module.salary}</strong>
          </section>
        </aside>
      </div>
    </details>
  `).join("");
}

const workCategories = [
  { id: "font", label: "字体设计" },
  { id: "model", label: "电商模特换装" },
  { id: "app", label: "APP" },
  { id: "ecommerce", label: "电商主视觉" },
  { id: "poster", label: "海报" },
  { id: "vi", label: "VI" },
  { id: "comic", label: "漫剧" },
  { id: "video", label: "视频" },
  { id: "icon", label: "图标" }
];

// 后续上传作品时修改这里：
// image 填本地图片路径，url 填抖音/小红书等公开链接，platform 填平台名称。
const studentWorks = [
  {
    id: "font-design-collection",
    category: "font",
    title: "字体设计作品集",
    description: "精选 23 组字体设计作品，包含商业促销、水墨书法、潮流涂鸦、立体金属与品牌字体等多种风格探索。",
    image: "images/works/font/font-collection-cover.png",
    images: [
      "images/works/font/font-limited-offer.png",
      "images/works/font/font-crazy-618.png",
      "images/works/font/font-year-end-sale.png",
      "images/works/font/font-double-12.png",
      "images/works/font/font-inspiration.png",
      "images/works/font/font-algorithm-order.png",
      "images/works/font/font-wisdom-landscape.png",
      "images/works/font/font-mechanical-awakening.png",
      "images/works/font/font-slow-creation.png",
      "images/works/font/font-time-realm.png",
      "images/works/font/font-legend.png",
      "images/works/font/font-go-all-out.png",
      "images/works/font/font-trend-frontline.png",
      "images/works/font/font-youth.png",
      "images/works/font/font-premium-brand.png",
      "images/works/font/font-future-youth.png",
      "images/works/font/font-spring.png",
      "images/works/font/font-heroic-spirit.png",
      "images/works/font/font-cloud-return.png",
      "images/works/font/font-midnight.png",
      "images/works/font/font-harvest.png",
      "images/works/font/font-landscape.png",
      "images/works/font/font-mountain-awakening.png"
    ],
    url: "",
    platform: ""
  },
  {
    id: "model-change-collection",
    category: "model",
    title: "电商模特换装作品集",
    description: "精选 11 组电商模特与商品场景生成案例，展示服装上身、模特替换、商品植入和商业场景合成等应用。",
    image: "images/works/model/model-portfolio-cover.png",
    images: [
      "images/works/model/model-autumn-studio.png",
      "images/works/model/model-autumn-scene.png",
      "images/works/model/model-isasi-cream.png",
      "images/works/model/model-floral-dress.png",
      "images/works/model/model-isasi-product.png",
      "images/works/model/model-sunscreen-clean.png",
      "images/works/model/model-black-dress.png",
      "images/works/model/model-one-leaf.png",
      "images/works/model/model-knit-street.png",
      "images/works/model/model-sunscreen-warm.png",
      "images/works/model/model-floral-composite.png"
    ],
    url: "",
    platform: ""
  },
  {
    id: "app-collection",
    category: "app",
    title: "APP作品集",
    description: "精选 14 组 APP 界面、启动页、引导页与移动端视觉设计作品。",
    image: "images/works/app/app-portfolio-cover-new.png",
    images: [
      "images/works/app/app-listening.png",
      "images/works/app/app-illustration-onboarding.png",
      "images/works/app/app-qq-campus.png",
      "images/works/app/app-delivery-splash.png",
      "images/works/app/app-quickdrop.png",
      "images/works/app/app-eleme-campaign.png",
      "images/works/app/app-plant-care.png",
      "images/works/app/app-jd-milk-tea.png",
      "images/works/app/app-memobuddy.png",
      "images/works/app/app-education.png",
      "images/works/app/app-rolebuddy.png",
      "images/works/app/app-ours-party.png",
      "images/works/app/app-muzi-tart.png",
      "images/works/app/app-ali-milk-tea.png"
    ],
    url: "",
    platform: ""
  },
  {
    id: "ecommerce-collection",
    category: "ecommerce",
    title: "电商主视觉作品集",
    description: "精选 12 组电商活动页、产品详情页与品牌 Banner 视觉设计作品。",
    image: "images/works/ecommerce/ecommerce-portfolio-cover.png",
    images: [
      "images/works/ecommerce/ecommerce-home-event.png",
      "images/works/ecommerce/ecommerce-tech-banner.png",
      "images/works/ecommerce/ecommerce-beauty-product.png",
      "images/works/ecommerce/ecommerce-headphones-banner.png",
      "images/works/ecommerce/ecommerce-suncare-banner.png",
      "images/works/ecommerce/ecommerce-jewelry-event.png",
      "images/works/ecommerce/ecommerce-pet-product.png",
      "images/works/ecommerce/ecommerce-milk-tea-banner.png",
      "images/works/ecommerce/ecommerce-healthy-food-banner.png",
      "images/works/ecommerce/ecommerce-cat-care-banner.png",
      "images/works/ecommerce/ecommerce-fresh-food-banner.png",
      "images/works/ecommerce/ecommerce-rose-beauty-banner.png"
    ],
    url: "",
    platform: ""
  },
  {
    id: "poster-collection",
    category: "poster",
    title: "海报作品集",
    description: "精选 17 组品牌宣传、节日营销、城市文化、产品广告与创意联名海报作品。",
    image: "images/works/poster/poster-portfolio-cover.png",
    images: [
      "images/works/poster/poster-spring-discovery.jpg",
      "images/works/poster/poster-summer-carnival.jpg",
      "images/works/poster/poster-autumn-harvest.jpg",
      "images/works/poster/poster-winter-fun.jpg",
      "images/works/poster/poster-new-year-signpost.jpg",
      "images/works/poster/poster-cute-pet-pool-party.jpg",
      "images/works/poster/poster-aurelia-jewelry.png",
      "images/works/poster/poster-beijing-winter-atlas.png",
      "images/works/poster/poster-beijing-unfolded.png",
      "images/works/poster/poster-potala-palace.png",
      "images/works/poster/poster-tea-horse-road.png",
      "images/works/poster/poster-crazy-thursday.png",
      "images/works/poster/poster-collaboration-sneaker.png",
      "images/works/poster/poster-brand-book-campaign.png",
      "images/works/poster/poster-brand-nature-campaign.png",
      "images/works/poster/poster-sylvaine-perfume.png",
      "images/works/poster/poster-aqua-noma.png"
    ],
    url: "",
    platform: ""
  },
  {
    id: "vi-collection",
    category: "vi",
    title: "VI作品集",
    description: "精选 12 组品牌视觉识别、IP 形象、三视图、包装设计与周边应用案例。",
    image: "images/works/vi/vi-portfolio-cover.png",
    images: [
      "images/works/vi/vi-xiaomi-pet-shop.png",
      "images/works/vi/vi-tutu-power-system.png",
      "images/works/vi/vi-astro-wish-system.png",
      "images/works/vi/vi-astro-wish-turnaround.png",
      "images/works/vi/vi-astro-wish-expressions.png",
      "images/works/vi/vi-astro-wish-products.png",
      "images/works/vi/vi-tomato-grocery.png",
      "images/works/vi/vi-luoluo-hanfu.png",
      "images/works/vi/vi-muzi-egg-tart.png",
      "images/works/vi/vi-ali-milk-tea.png",
      "images/works/vi/vi-taotaopeach.png",
      "images/works/vi/vi-tutu-power-campaign.png"
    ],
    url: "",
    platform: ""
  },
  {
    id: "comic-collection",
    category: "comic",
    title: "AI漫剧作品集",
    description: "共 7 集 AI 漫剧作品，点击查看全部剧集并在线播放。",
    image: "images/works/comic/comic-series-cover.png",
    videoUnit: "集",
    videos: [
      { title: "第 1 集", bvid: "BV1HkJM6LExM" },
      { title: "第 2 集", bvid: "BV1ckJM6LEdA" },
      { title: "第 3 集", bvid: "BV1nkJM6LEQu" },
      { title: "第 4 集", bvid: "BV1ckJM6LEUC" },
      { title: "第 5 集", bvid: "BV1J2JM6kEzb" },
      { title: "第 6 集", bvid: "BV1J2JM6kEjb" },
      { title: "第 7 集", bvid: "BV1f2JM6rE2D" }
    ],
    url: "",
    platform: "哔哩哔哩"
  },
  {
    id: "video-collection",
    category: "video",
    title: "AI视频作品集",
    description: "精选 30 部 AI 动态影像作品，点击查看全部视频并在线播放。",
    image: "images/works/video/video-collection-cover.png",
    videoUnit: "个视频",
    videos: [
      { title: "视频 01", bvid: "BV1dfJg63EbF" },
      { title: "视频 02", bvid: "BV1dfJg63EtD" },
      { title: "视频 03", bvid: "BV1dfJg63E5t" },
      { title: "视频 04", bvid: "BV1dfJg63E4W" },
      { title: "视频 05", bvid: "BV1dfJg63EHd" },
      { title: "视频 06", bvid: "BV1vfJg6GEzM" },
      { title: "视频 07", bvid: "BV1LfJg6GEgc" },
      { title: "视频 08", bvid: "BV1dfJg63E4E" },
      { title: "视频 09", bvid: "BV1dfJg63E4M" },
      { title: "视频 10", bvid: "BV15fJg6GEdz" },
      { title: "视频 11", bvid: "BV15fJg6GEd8" },
      { title: "视频 12", bvid: "BV1dfJg63E4w" },
      { title: "视频 13", bvid: "BV1RfJg63Erm" },
      { title: "视频 14", bvid: "BV1dfJg63Eu5" },
      { title: "视频 15", bvid: "BV1LfJg6GEb4" },
      { title: "视频 16", bvid: "BV1dfJg63E4U" },
      { title: "视频 17", bvid: "BV1Czjc6pEir" },
      { title: "视频 18", bvid: "BV1Czjc6pExG" },
      { title: "视频 19", bvid: "BV1Czjc6pEvy" },
      { title: "视频 20", bvid: "BV1Czjc6pEvH" },
      { title: "视频 21", bvid: "BV1NRjF6WEUV" },
      { title: "视频 22", bvid: "BV1sRjF6WE1o" },
      { title: "视频 23", bvid: "BV1KRjF6WEND" },
      { title: "视频 24", bvid: "BV1NRjF6WEYk" },
      { title: "视频 25", bvid: "BV1KRjF6WEK3" },
      { title: "视频 26", bvid: "BV1xRjF6WEst" },
      { title: "视频 27", bvid: "BV1NRjF6WEhS" },
      { title: "视频 28", bvid: "BV1pfjF6DEv9" },
      { title: "视频 29", bvid: "BV1AfjF6DEta" },
      { title: "视频 30", bvid: "BV1AfjF6DERA" }
    ],
    url: "",
    platform: "哔哩哔哩"
  },
  {
    id: "icon-collection",
    category: "icon",
    title: "图标作品集",
    description: "精选 52 组应用功能、生活服务、电商、科技与品牌主题的 3D 图标设计作品。",
    image: "images/works/icon/icon-portfolio-cover.png",
    images: Array.from({ length: 52 }, (_, index) =>
      `images/works/icon/icon-${String(index + 1).padStart(2, "0")}.png`
    ),
    url: "",
    platform: ""
  },
  ...workCategories
    .filter((category) => !["font", "model", "app", "ecommerce", "poster", "vi", "comic", "video", "icon"].includes(category.id))
    .map((category, index) => ({
      id: `placeholder-${index + 1}`,
      category: category.id,
      title: `${category.label}作品`,
      description: "作品整理中，后续将更新学员真实项目。",
      image: "",
      url: "",
      platform: ""
    }))
];

const teacherImageWorks = [
  {
    id: "teacher-image-collection",
    title: "AI 商业图片作品集",
    description: "精选 110 张海报视觉、商业摄影、品牌图形、角色 IP 与空间项目图片。",
    image: "images/works/app/teacher-ai-image-cover.png",
    images: [
      "images/works/teacher-image/teacher-image-01.jpg",
      "images/works/teacher-image/teacher-image-02.jpg",
      "images/works/teacher-image/teacher-image-03.jpg",
      "images/works/teacher-image/teacher-image-04.jpg",
      "images/works/teacher-image/teacher-image-05.jpg",
      "images/works/teacher-image/teacher-image-06.jpg",
      "images/works/teacher-image/teacher-image-07.jpg",
      "images/works/teacher-image/teacher-image-08.jpg",
      "images/works/teacher-image/teacher-image-09.jpg",
      "images/works/teacher-image/teacher-image-10.jpg",
      "images/works/teacher-image/teacher-image-11.jpg",
      "images/works/teacher-image/teacher-image-13.jpg",
      "images/works/teacher-image/teacher-image-14.jpg",
      "images/works/teacher-image/teacher-image-15.jpg",
      "images/works/teacher-image/teacher-image-16.jpg",
      "images/works/teacher-image/teacher-image-17.jpg",
      "images/works/teacher-image/teacher-image-18.jpg",
      "images/works/teacher-image/teacher-image-19.jpg",
      "images/works/teacher-image/teacher-image-20.jpg",
      "images/works/teacher-image/teacher-image-shen-01.jpg",
      "images/works/teacher-image/teacher-image-shen-02.jpg",
      "images/works/teacher-image/teacher-image-shen-03.jpg",
      "images/works/teacher-image/teacher-image-shen-04.jpg",
      "images/works/teacher-image/teacher-image-shen-05.jpg",
      "images/works/teacher-image/teacher-image-shen-06.jpg",
      "images/works/teacher-image/teacher-image-shen-07.jpg",
      "images/works/teacher-image/teacher-image-shen-08.jpg",
      "images/works/teacher-image/teacher-image-shen-09.jpg",
      "images/works/teacher-image/teacher-image-shen-10.jpg",
      "images/works/teacher-image/teacher-image-shen-11.jpg",
      "images/works/teacher-image/teacher-image-shen-12.jpg",
      "images/works/teacher-image/teacher-image-shen-13.jpg",
      "images/works/teacher-image/teacher-image-shen-14.jpg",
      "images/works/teacher-image/teacher-image-shen-15.jpg",
      "images/works/teacher-image/teacher-image-shen-16.jpg",
      "images/works/teacher-image/teacher-image-shen-17.jpg",
      "images/works/teacher-image/teacher-image-shen-18.jpg",
      "images/works/teacher-image/teacher-image-shen-19.jpg",
      "images/works/teacher-image/teacher-image-shen-20.jpg",
      "images/works/teacher-image/teacher-image-shen-21.jpg",
      "images/works/teacher-image/teacher-image-shen-22.jpg",
      "images/works/teacher-image/teacher-image-shen-23.jpg",
      "images/works/teacher-image/teacher-image-shen-24.jpg",
      "images/works/teacher-image/teacher-image-shen-25.jpg",
      "images/works/teacher-image/teacher-image-shen-26.jpg",
      "images/works/teacher-image/teacher-image-shen-27.jpg",
      "images/works/teacher-image/teacher-image-shen-28.jpg",
      "images/works/teacher-image/teacher-image-shen-29.jpg",
      "images/works/teacher-image/teacher-image-shen-30.jpg",
      "images/works/teacher-image/teacher-image-shen-31.jpg",
      "images/works/teacher-image/teacher-image-shen-32.jpg",
      "images/works/teacher-image/teacher-image-shen-33.jpg",
      "images/works/teacher-image/teacher-image-shen-34.jpg",
      "images/works/teacher-image/teacher-image-shen-35.jpg",
      "images/works/teacher-image/teacher-image-shen-36.jpg",
      "images/works/teacher-image/teacher-image-shen-37.jpg",
      "images/works/teacher-image/teacher-image-shen-38.jpg",
      "images/works/teacher-image/teacher-image-shen-39.jpg",
      "images/works/teacher-image/teacher-image-shen-40.jpg",
      "images/works/teacher-image/teacher-image-shen-41.jpg",
      "images/works/teacher-image/teacher-image-shen-42.jpg",
      "images/works/teacher-image/teacher-image-shen-43.jpg",
      "images/works/teacher-image/teacher-image-shen-44.jpg",
      "images/works/teacher-image/teacher-image-shen-45.jpg",
      "images/works/teacher-image/teacher-image-shen-46.jpg",
      "images/works/teacher-image/teacher-image-shen-47.jpg",
      "images/works/teacher-image/teacher-image-shen-48.jpg",
      "images/works/teacher-image/teacher-image-shen-49.jpg",
      "images/works/teacher-image/teacher-image-shen-50.jpg",
      "images/works/teacher-image/teacher-image-shen-51.jpg",
      "images/works/teacher-image/teacher-image-shen-52.jpg",
      "images/works/teacher-image/teacher-image-shen-53.jpg",
      "images/works/teacher-image/teacher-image-shen-54.jpg",
      "images/works/teacher-image/teacher-image-shen-55.jpg",
      "images/works/teacher-image/teacher-image-shen-56.jpg",
      "images/works/teacher-image/teacher-image-shen-57.jpg",
      "images/works/teacher-image/teacher-image-shen-58.jpg",
      "images/works/teacher-image/teacher-image-shen-59.jpg",
      "images/works/teacher-image/teacher-image-shen-60.jpg",
      "images/works/teacher-image/teacher-image-shen-61.jpg",
      "images/works/teacher-image/teacher-image-shen-62.jpg",
      "images/works/teacher-image/teacher-image-shen-63.jpg",
      "images/works/teacher-image/teacher-image-shen-64.jpg",
      "images/works/teacher-image/teacher-image-shen-65.jpg",
      "images/works/teacher-image/teacher-image-shen-66.jpg",
      "images/works/teacher-image/teacher-image-shen-67.jpg",
      "images/works/teacher-image/teacher-image-shen-68.jpg",
      "images/works/teacher-image/teacher-image-shen-69.jpg",
      "images/works/teacher-image/teacher-image-shen-70.jpg",
      "images/works/teacher-image/teacher-image-shen-71.jpg",
      "images/works/teacher-image/teacher-image-shen-72.jpg",
      "images/works/teacher-image/teacher-image-shen-73.jpg",
      "images/works/teacher-image/teacher-image-shen-74.jpg",
      "images/works/teacher-image/teacher-image-shen-75.jpg",
      "images/works/teacher-image/teacher-image-shen-76.jpg",
      "images/works/teacher-image/teacher-image-shen-77.jpg",
      "images/works/teacher-image/teacher-image-shen-78.jpg",
      "images/works/teacher-image/teacher-image-shen-79.jpg",
      "images/works/teacher-image/teacher-image-shen-80.jpg",
      "images/works/teacher-image/teacher-image-shen-81.jpg",
      "images/works/teacher-image/teacher-image-shen-82.jpg",
      "images/works/teacher-image/teacher-image-shen-83.jpg",
      "images/works/teacher-image/teacher-image-shen-84.jpg",
      "images/works/teacher-image/teacher-image-shen-85.jpg",
      "images/works/teacher-image/teacher-image-shen-86.jpg",
      "images/works/teacher-image/teacher-image-shen-87.jpg",
      "images/works/teacher-image/teacher-image-shen-88.jpg",
      "images/works/teacher-image/teacher-image-shen-89.jpg",
      "images/works/teacher-image/teacher-image-shen-90.jpg",
      "images/works/teacher-image/teacher-image-shen-91.jpg"
    ]
  }
];

const teacherVideoWorks = [
  {
    id: "teacher-video-collection",
    title: "AI 视频与漫剧作品集",
    image: "images/works/app/teacher-ai-video-cover.png",
    videoUnit: "个视频",
    videos: [
      { title: "老师视频 01", bvid: "BV18XLX6rEYh" },
      { title: "老师视频 02", bvid: "BV1SXLX6rEvg" },
      { title: "老师视频 03", bvid: "BV1bXLX6rEQo" },
      { title: "老师视频 04", bvid: "BV1bXLX6rEBR" },
      { title: "老师视频 05", bvid: "BV18XLX6rELu" },
      { title: "老师视频 06", bvid: "BV18XLX6rEsg" },
      { title: "老师视频 07", bvid: "BV18XLX6rEKs" },
      { title: "老师视频 08", bvid: "BV18XLX6rEsK" },
      { title: "老师视频 09", bvid: "BV18XLX6rEAE" },
      { title: "老师视频 10", bvid: "BV18XLX6kETP" },
      { title: "老师视频 11", bvid: "BV1bXLX6rE6x" },
      { title: "老师视频 12", bvid: "BV13rjF6AEQ4" },
      { title: "老师视频 13", bvid: "BV1jajF6uE3Z" },
      { title: "老师视频 14", bvid: "BV1LajF6uEfP" },
      { title: "老师视频 15", bvid: "BV1dmjJ6fERZ" },
      { title: "老师视频 16", bvid: "BV1omjJ6fE3X" },
      { title: "老师视频 17", bvid: "BV1LUjJ6FERs" },
      { title: "老师视频 18", bvid: "BV1dmjJ6fE8w" },
      { title: "老师视频 19", bvid: "BV1dmjJ6fEQS" }
    ]
  }
];

const bilibiliVideoCovers = {
  BV13rjF6AEQ4: "https://i0.hdslb.com/bfs/archive/f8b2e5aa24ca3a8e6fa92e012e1a364924f8ec43.jpg",
  BV15fJg6GEd8: "https://i1.hdslb.com/bfs/archive/ea37a566185f57ef9a5a5318da8820d10bb0f5dc.jpg",
  BV15fJg6GEdz: "https://i2.hdslb.com/bfs/archive/6138d8b925eae6bac9cb778a52c4377dddd57932.jpg",
  BV1LUjJ6FERs: "https://i1.hdslb.com/bfs/archive/ef069d56782508e5877aeadc7b060311a752ec06.jpg",
  BV18XLX6kETP: "https://i0.hdslb.com/bfs/archive/bfbb45666d4f5931b0d1adb2cbd5eab595f1da6b.jpg",
  BV18XLX6rEAE: "https://i0.hdslb.com/bfs/archive/0c9246f3ad4ca624ccf051df263ce75759c7d6f1.jpg",
  BV18XLX6rEKs: "https://i2.hdslb.com/bfs/archive/c97295afc06cbcf38d1cdd9b96ea94c048597be6.jpg",
  BV18XLX6rELu: "https://i1.hdslb.com/bfs/archive/89c2d8432ef87586245dd21c9ee4651df93eb8f5.jpg",
  BV18XLX6rEYh: "https://i0.hdslb.com/bfs/archive/4c989f4c034f6975eae24dbdb65f7e80c323ad10.jpg",
  BV18XLX6rEsK: "https://i1.hdslb.com/bfs/archive/ef0e3377e0ee2b64077de86a6b27cae07a8a7eae.jpg",
  BV18XLX6rEsg: "https://i0.hdslb.com/bfs/archive/619b39a5b06779fc883728e9578acc0d493eb232.jpg",
  BV1AfjF6DERA: "https://i0.hdslb.com/bfs/archive/9ce4cad7b2dca2aae237eb65684a8d979653595a.jpg",
  BV1AfjF6DEta: "https://i0.hdslb.com/bfs/archive/7d7621400d5a9525b38083b959e9c693a9e48357.jpg",
  BV1Czjc6pEir: "https://i2.hdslb.com/bfs/archive/fb86bc6d992db66c31c48041c914c11d202b603d.jpg",
  BV1Czjc6pEvH: "https://i1.hdslb.com/bfs/archive/0c8378e9802001ca63f65f5961330a69da9cca09.jpg",
  BV1Czjc6pEvy: "https://i2.hdslb.com/bfs/archive/767ae3a1a3b53b7b264b6d213532bf1d86137fe2.jpg",
  BV1Czjc6pExG: "https://i0.hdslb.com/bfs/archive/fd93c02770220a36cc21cf7dbf5c76b08ac9837c.jpg",
  BV1HkJM6LExM: "https://i2.hdslb.com/bfs/archive/21855c8660cb0ac3ab1b6e23c9e2df70e369ff58.jpg",
  BV1J2JM6kEjb: "https://i0.hdslb.com/bfs/archive/21929f87563be42c4b32711130e898b2e5a4077f.jpg",
  BV1J2JM6kEzb: "https://i1.hdslb.com/bfs/archive/a2700079f86a1ae6d28f162fabbed261d855ed99.jpg",
  BV1KRjF6WEK3: "https://i0.hdslb.com/bfs/archive/ed1d9e6262c9096c8e803954ba321ea355ec6881.jpg",
  BV1KRjF6WEND: "https://i1.hdslb.com/bfs/archive/c0a9a70873bb59f5c352f0be01dca37a0210d820.jpg",
  BV1LajF6uEfP: "https://i0.hdslb.com/bfs/archive/1b97faac5c7396856865bf7c83f480decaa1d9d5.jpg",
  BV1LfJg6GEb4: "https://i1.hdslb.com/bfs/archive/8014012bb5c60ec10a39482d1e9e91a40d64518f.jpg",
  BV1LfJg6GEgc: "https://i1.hdslb.com/bfs/archive/48654db8026946e7d5870c3c1f395c4b2f75968d.jpg",
  BV1NRjF6WEUV: "https://i0.hdslb.com/bfs/archive/1b10b43d4e2657f0667fa90ece5bbfa48dba7b9d.jpg",
  BV1NRjF6WEYk: "https://i1.hdslb.com/bfs/archive/95f1f70e4aa7f99662a2450c7d8a8f2c22756b82.jpg",
  BV1NRjF6WEhS: "https://i0.hdslb.com/bfs/archive/4cc8c353380f3318e3c124d91d27887e9fb152a4.jpg",
  BV1RfJg63Erm: "https://i1.hdslb.com/bfs/archive/b18475c05a53e0d515c64a9c3d3396753f94d04b.jpg",
  BV1SXLX6rEvg: "https://i2.hdslb.com/bfs/archive/412c6f766c0b8c9c603cdaa664716ebf377b0a84.jpg",
  BV1bXLX6rE6x: "https://i0.hdslb.com/bfs/archive/18c3faf7c94ebc8ddfa9ecc4eb2baf14d45ec7ff.jpg",
  BV1bXLX6rEBR: "https://i1.hdslb.com/bfs/archive/a8d7c2db5f6ecae8c635cbe62520fdafeb31dda9.jpg",
  BV1bXLX6rEQo: "https://i0.hdslb.com/bfs/archive/13149c6db7d888a1e8b326bfe05f4bcb2447ce78.jpg",
  BV1ckJM6LEUC: "https://i1.hdslb.com/bfs/archive/06c3a10f829d7a908a0c6ce3ed2dce382a46f915.jpg",
  BV1ckJM6LEdA: "https://i2.hdslb.com/bfs/archive/ebcf52032e6b885d8b21f5010956ff35ae5681c4.jpg",
  BV1dfJg63E4E: "https://i0.hdslb.com/bfs/archive/c26ebf82d363e3adc4b72bf1374f3049013019ae.jpg",
  BV1dfJg63E4M: "https://i0.hdslb.com/bfs/archive/f593c785e5261945ebd12c5e8059d2aa8793acac.jpg",
  BV1dfJg63E4U: "https://i1.hdslb.com/bfs/archive/58bb44f69680d593ec333806c29b873eafac25f3.jpg",
  BV1dfJg63E4W: "https://i1.hdslb.com/bfs/archive/a81f4cf11e7cbc92922cf4d811dc5d3c89f9f5ba.jpg",
  BV1dfJg63E4w: "https://i1.hdslb.com/bfs/archive/4ca1ad19cfb3d08a6ed3d2a23871c35ec560539c.jpg",
  BV1dfJg63E5t: "https://i1.hdslb.com/bfs/archive/51137a1cc5af04062d1562b7818681d831eb155a.jpg",
  BV1dfJg63EHd: "https://i0.hdslb.com/bfs/archive/656abaa67a68292b7de18ad4bb0c8162b688bc68.jpg",
  BV1dfJg63EbF: "https://i2.hdslb.com/bfs/archive/a28c8fdaec448070f425723d773c5f8b6b811afe.jpg",
  BV1dfJg63EtD: "https://i1.hdslb.com/bfs/archive/3717485110f5fa02c679e16409eafebe69053c62.jpg",
  BV1dfJg63Eu5: "https://i2.hdslb.com/bfs/archive/ba144670c88ddfb022092b64cdd506711f5233b2.jpg",
  BV1dmjJ6fE8w: "https://i1.hdslb.com/bfs/archive/42697608e389ee78a961cc9684b7118483435d13.jpg",
  BV1dmjJ6fEQS: "https://i0.hdslb.com/bfs/archive/6b95946184da7da36ca316bb676344dae0d701bb.jpg",
  BV1dmjJ6fERZ: "https://i2.hdslb.com/bfs/archive/e8d5711a75eab2698f214d6692a1f728b62f9e9d.jpg",
  BV1f2JM6rE2D: "https://i1.hdslb.com/bfs/archive/5cefadbb50568e92517ac70663f7f9419ef79207.jpg",
  BV1jajF6uE3Z: "https://i1.hdslb.com/bfs/archive/08510f335280c3e1783d48d007a35e055107dc0e.jpg",
  BV1nkJM6LEQu: "https://i1.hdslb.com/bfs/archive/3f20fc72ab847d7cdb904fdb442f0854339fb217.jpg",
  BV1omjJ6fE3X: "https://i1.hdslb.com/bfs/archive/0fc9cf71f9f623266449e635938a350e3d728042.jpg",
  BV1pfjF6DEv9: "https://i0.hdslb.com/bfs/archive/bd9f788d119c214faddeec07b0d87c0581fed02d.jpg",
  BV1sRjF6WE1o: "https://i2.hdslb.com/bfs/archive/150309a47f2ba2162e1a1b700bd2ae8404c87dc4.jpg",
  BV1vfJg6GEzM: "https://i2.hdslb.com/bfs/archive/0febe0a0ea2db91273b9f3a2df08922ebd4d4789.jpg",
  BV1xRjF6WEst: "https://i0.hdslb.com/bfs/archive/cd64db81cc0357f610fe3c0c0f633b1fa6d0ac3f.jpg"
};

const worksGridRoot = document.querySelector("#works-grid");

function renderWorks() {
  if (!worksGridRoot) return;
  worksGridRoot.innerHTML = studentWorks.map((work, index) => {
    const category = workCategories.find((item) => item.id === work.category);
    const content = `
      <div class="work-image ${work.image ? "" : "work-placeholder"}">
        ${work.image
          ? `<img src="${work.image}" alt="${work.title}" loading="lazy">`
          : `<span class="work-placeholder-icon"></span><small>待上传作品</small>`}
        ${work.platform ? `<span class="work-platform">${work.platform}</span>` : ""}
        ${work.url ? `<span class="work-open">↗</span>` : ""}
      </div>
      <div class="work-meta">
        <span>${category?.label || "学员作品"}</span>
        <h3>${work.title}</h3>
        <p>${work.description}</p>
      </div>`;

    return work.videos?.length
      ? `<button class="work-card work-card-button reveal visible" type="button" data-video-work-id="${work.id}" data-category="${work.category}" aria-label="查看${work.title}${work.category === "comic" ? "全部剧集" : "全部视频"}">${content}</button>`
      : work.url
      ? `<a class="work-card work-card-link reveal visible" href="${work.url}" target="_blank" rel="noopener noreferrer" data-category="${work.category}" aria-label="打开${work.title}">${content}</a>`
      : work.images?.length
        ? `<button class="work-card work-card-button reveal visible" type="button" data-work-id="${work.id}" data-category="${work.category}" aria-label="查看${work.title}详情">${content}</button>`
        : `<article class="work-card reveal visible" data-category="${work.category}">${content}</article>`;
  }).join("");
}

renderWorks();

const workLightbox = document.querySelector("#work-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxDetailTitle = document.querySelector("#lightbox-detail-title");
const lightboxCount = document.querySelector("#lightbox-count");
const lightboxThumbs = document.querySelector("#lightbox-thumbs");
let activeWork = null;
let activeImageIndex = 0;

function updateLightbox() {
  if (!activeWork) return;
  const images = activeWork.images || [activeWork.image];
  lightboxImage.src = images[activeImageIndex];
  lightboxImage.alt = `${activeWork.title} 第 ${activeImageIndex + 1} 张`;
  lightboxDetailTitle.textContent = `${activeWork.title} · 第 ${activeImageIndex + 1} 张`;
  lightboxCount.textContent = `${activeImageIndex + 1} / ${images.length}`;
  lightboxThumbs.innerHTML = images.map((image, index) => `
    <button class="${index === activeImageIndex ? "active" : ""}" type="button" data-image-index="${index}" aria-label="查看第 ${index + 1} 张">
      <img src="${image}" alt="" loading="lazy">
    </button>
  `).join("");
  requestAnimationFrame(() => {
    lightboxThumbs.querySelector(".active")?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  });
  const showNavigation = images.length > 1;
  workLightbox.querySelector(".lightbox-prev").hidden = !showNavigation;
  workLightbox.querySelector(".lightbox-next").hidden = !showNavigation;
}

function openLightbox(work) {
  activeWork = work;
  activeImageIndex = 0;
  updateLightbox();
  workLightbox.hidden = false;
  document.body.classList.add("menu-open");
  workLightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  workLightbox.hidden = true;
  document.body.classList.remove("menu-open");
  activeWork = null;
}

function changeLightboxImage(direction) {
  if (!activeWork) return;
  const images = activeWork.images || [activeWork.image];
  activeImageIndex = (activeImageIndex + direction + images.length) % images.length;
  updateLightbox();
}

worksGridRoot?.addEventListener("click", (event) => {
  const videoCard = event.target.closest("[data-video-work-id]");
  if (videoCard) {
    const work = studentWorks.find((item) => item.id === videoCard.dataset.videoWorkId);
    if (work) openVideoLibrary(work);
    return;
  }
  const card = event.target.closest("[data-work-id]");
  if (!card) return;
  const work = studentWorks.find((item) => item.id === card.dataset.workId);
  if (work) openLightbox(work);
});

workLightbox?.addEventListener("click", (event) => {
  if (event.target.closest("[data-lightbox-close]")) closeLightbox();
  if (event.target.closest(".lightbox-prev")) changeLightboxImage(-1);
  if (event.target.closest(".lightbox-next")) changeLightboxImage(1);
  const thumb = event.target.closest("[data-image-index]");
  if (thumb) {
    activeImageIndex = Number(thumb.dataset.imageIndex);
    updateLightbox();
  }
});

const videoLightbox = document.querySelector("#video-lightbox");
const videoLibraryTitle = document.querySelector("#video-library-title");
const comicVideoGrid = document.querySelector("#comic-video-grid");
const videoLibraryView = document.querySelector("#video-library-view");
const videoPlayerView = document.querySelector("#video-player-view");
const videoPlayer = document.querySelector("#comic-video-player");
const videoPlayerTitle = document.querySelector("#video-player-title");
let activeVideoWork = null;

document.querySelector("#teacher-works")?.addEventListener("click", (event) => {
  const imageCard = event.target.closest("[data-teacher-image-work-id]");
  if (imageCard) {
    const work = teacherImageWorks.find((item) => item.id === imageCard.dataset.teacherImageWorkId);
    if (work) openLightbox(work);
    return;
  }
  const videoCard = event.target.closest("[data-teacher-video-work-id]");
  if (!videoCard) return;
  const work = teacherVideoWorks.find((item) => item.id === videoCard.dataset.teacherVideoWorkId);
  if (work) openVideoLibrary(work);
});

function openVideoLibrary(work) {
  activeVideoWork = work;
  videoLibraryTitle.textContent = `${work.title} · ${work.videos.length} ${work.videoUnit || "个视频"}`;
  comicVideoGrid.innerHTML = work.videos.map((video, index) => `
    <button class="comic-episode-card" type="button" data-video-index="${index}" aria-label="播放${video.title}">
      <span class="comic-episode-thumb">
        <img src="${bilibiliVideoCovers[video.bvid] || work.image}" alt="${video.title} 视频封面" loading="lazy" referrerpolicy="no-referrer">
        <i>▶</i>
      </span>
      <strong>${video.title}</strong>
      <small>点击在线播放</small>
    </button>
  `).join("");
  showVideoLibrary();
  videoLightbox.hidden = false;
  document.body.classList.add("menu-open");
  videoLightbox.querySelector(".video-lightbox-close").focus();
}

function showVideoLibrary() {
  videoPlayer.src = "";
  videoLibraryView.hidden = false;
  videoPlayerView.hidden = true;
}

function playComicVideo(index) {
  if (!activeVideoWork) return;
  const video = activeVideoWork.videos[index];
  if (!video) return;
  videoPlayerTitle.textContent = `${activeVideoWork.title} · ${video.title}`;
  videoPlayer.src = `https://player.bilibili.com/player.html?bvid=${video.bvid}&page=1&high_quality=1&danmaku=0&autoplay=1`;
  videoLibraryView.hidden = true;
  videoPlayerView.hidden = false;
}

function closeVideoLibrary() {
  videoLightbox.hidden = true;
  videoPlayer.src = "";
  document.body.classList.remove("menu-open");
  activeVideoWork = null;
}

videoLightbox?.addEventListener("click", (event) => {
  if (event.target.closest("[data-video-lightbox-close]")) closeVideoLibrary();
  if (event.target.closest("[data-video-library-back]")) showVideoLibrary();
  const episode = event.target.closest("[data-video-index]");
  if (episode) playComicVideo(Number(episode.dataset.videoIndex));
});

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");

function setMenu(open) {
  menuButton.classList.toggle("active", open);
  navigation.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "关闭导航菜单" : "打开导航菜单");
}

menuButton.addEventListener("click", () => {
  setMenu(!navigation.classList.contains("open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);

  let currentSection = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
  });
}, { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(item);
});

const counters = document.querySelectorAll(".count-up");

function animateCounter(element) {
  const target = Number(element.dataset.count);
  const decimals = Number(element.dataset.decimals || 0);
  const duration = 1400;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = target * eased;
    element.textContent = currentValue.toLocaleString("zh-CN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.55 });

counters.forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const willOpen = !item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("open");
      faqItem.querySelector("button").setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

const backToTopButton = document.querySelector(".back-to-top");

function updateBackToTop() {
  backToTopButton?.classList.toggle("show", window.scrollY > 360);
}

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("keydown", (event) => {
  if (!videoLightbox?.hidden) {
    if (event.key === "Escape") closeVideoLibrary();
    return;
  }
  if (!workLightbox?.hidden) {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") changeLightboxImage(-1);
    if (event.key === "ArrowRight") changeLightboxImage(1);
    return;
  }
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    setMenu(false);
  }
});

window.addEventListener("scroll", updateBackToTop, { passive: true });
header.classList.toggle("scrolled", window.scrollY > 20);
updateBackToTop();
