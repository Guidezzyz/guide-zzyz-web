import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Heart,
  MessageSquare,
  Share2,
  BookOpen,
  Mail,
  QrCode,
} from "lucide-react";
import Hero from "@/assets/home/hero.png";
import ImageQrCode from "@/assets/home/contact/qr.jpg";
import ImageGroup from "@/assets/home/net/img-group.png";
import ImageOfficialAccount from "@/assets/home/net/img-official-account.png";
import Member1Img from "@/assets/team/zhang.png";
export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState(0);
  const [currentMember, setCurrentMember] = useState(0);

  const platforms = [
    {
      id: 0,
      name: "求学指南酱公众号",
      icon: (
        <MessageSquare className="w-9 h-9 md:w-10 md:h-10" />
      ),
      description:
        "我们的主要内容发布平台，定期推送优质学习经验文章、升学指导内容和教育资讯。关注公众号,第一时间获取最新的学习资源和活动信息。",
      features: [
        "每周精选文章",
        "升学资讯推送",
        "互动答疑服务",
      ],
      image: ImageOfficialAccount,
    },
    {
      id: 1,
      name: "志愿帮帮群",
      icon: <Users className="w-9 h-9 md:w-10 md:h-10" />,
      description:
        "汇聚全国各地的学生和家长，提供一对一的志愿填报咨询和经验分享。在这里，你可以找到志同道合的伙伴，获得学长学姐的宝贵建议。",
      features: ["一对一咨询", "经验交流分享", "最新政策解读"],
      image: ImageGroup,
    },
    {
      id: 2,
      name: "指南论坛",
      icon: <Share2 className="w-9 h-9 md:w-10 md:h-10" />,
      description:
        "开放的学习交流社区，涵盖学习方法、专业选择、院校信息等多个板块。在论坛中自由讨论，分享你的故事，寻找问题的答案。",
      features: [
        "多板块讨论区",
        "精华内容沉淀",
        "积分激励机制",
      ],
      image: null,
    },
  ];

  const teamMembers = [
    {
      name: "张晓明",
      role: "技术部",
      university: "清华大学计算机系",
      themeColor: "#0067D1", // 经典科技蓝
      tags:["可进可退可盐可甜", "除了工科摄影遛狗插花啥都干","国奖获得者"],
      message: "负责团队技术架构设计和开发工作，擅长前后端开发和系统优化。曾参与多个大型项目的开发，致力于用技术赋能教育。成年人的生活太需要这样的轻松和志趣，我们是线上的好友和伙伴，也是线下的小姐妹、好朋友。如果一定要用一个词来形容我们，那便是松弛与理想并存吧。",
      avatar: Member1Img, // 直接放图片变量
    },
    {
      name: "李雨晴",
      role: "宣传部",
      university: "北京大学新闻与传播学院",
      themeColor: "#10B981", // 翡翠文艺绿
      tags:["永远年轻的大三学姐^^","可进可退可盐可甜", "除了工科摄影遛狗插花啥都干","国奖获得者"],
      message: "擅长内容策划和新媒体运营，带领团队打造了多个爆款文章。热爱教育事业，希望通过优质内容帮助更多学生找到适合自己的发展道路。",
      avatar: Member1Img, 
    },
    {
      name: "王子轩",
      role: "文稿部",
      university: "复旦大学中文系",
      themeColor: "#8B5CF6", // 优雅梦幻紫
      tags:["永远年轻的大三学姐^^", "除了工科摄影遛狗插花啥都干", "可进可退可盐可甜", "国奖获得者"],
      message: "负责内容审核和编辑工作，确保每一篇文章的质量。拥有丰富的写作经验，擅长用生动的语言讲述教育故事。",
      avatar: Member1Img,
    },
    {
      name: "陈思琪",
      role: "运营总监",
      university: "上海交通大学管理学院",
      themeColor: "#F59E0B", // 活力阳光橙
      tags:["永远年轻的大三学姐^^", "可进可退可盐可甜", "除了工科摄影遛狗插花啥都干", "国奖获得者"],
      message: "负责团队整体运营和项目管理，协调各部门工作。具有敏锐的市场洞察力，善于挖掘用户需求，推动团队持续成长。",
      avatar: Member1Img,
    },
  ];

  const nextMember = () => {
    if (currentMember < teamMembers.length - 1) {
      setCurrentMember(currentMember + 1);
    }
  };

  const prevMember = () => {
    if (currentMember > 0) {
      setCurrentMember(currentMember - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={Hero}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black/75"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 container-custom mx-auto"
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 md:mb-10 drop-shadow-2xl tracking-tight"
            style={{ color: "#FFFFFF" }}
          >
            求学指南酱
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-lg mb-10 md:mb-12 font-normal px-4"
            style={{ color: "rgba(255, 255, 255, 0.85)" }}
          >
            我们是一群来自全国各地名校的学生，致力于为高中生和大学生提供最真实、最有价值的学习经验和升学指导。
            在这里，你可以找到学长学姐的宝贵经验，获得专业的升学建议，与志同道合的伙伴共同成长。
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <button
              onClick={() => (window.location.href = "#guides")}
              className="inline-flex items-center gap-3 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105 active:scale-95"
              style={{
                paddingLeft: "48px",
                paddingRight: "48px",
                paddingTop: "20px",
                paddingBottom: "20px",
                backgroundColor: "#0067D1",
                color: "#FFFFFF",
                fontSize: "20px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#0052a8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#0067D1")
              }
            >
              <BookOpen className="w-6 h-6" />
              浏览指南
            </button>

            <button
              onClick={() =>
                (window.location.href = "/join-us")
              }
              className="inline-flex items-center gap-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 border-2"
              style={{
                paddingLeft: "48px",
                paddingRight: "48px",
                paddingTop: "20px",
                paddingBottom: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderColor: "#F5F5F5",
                color: "#FFFFFF",
                fontSize: "20px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#F5F5F5";
                e.currentTarget.style.color = "#0067D1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.color = "#FFFFFF";
              }}
            >
              <Users className="w-6 h-6" />
              加入我们
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Introduction */}
      <section className="section-spacing">
        <div
          className="container-custom max-w-5xl"
          style={{ margin: "0 auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginBottom: "48px" }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black text-center"
              style={{ marginBottom: "32px" }}
            >
              团队介绍
            </h2>
            <p className="text-base md:text-lg text-[#48556a] leading-relaxed text-center">
              求学指南酱团队成立于2024年，由一群热爱教育、乐于分享的优秀大学生组成。我们来自北京大学、复旦大学、上海交通大学等全国顶尖高校，涵盖理工科、人文社科等多个专业领域。
            </p>
            <p
              className="text-base md:text-lg text-[#48556a] leading-relaxed text-center"
              style={{ marginTop: "16px" }}
            >
              我们深知求学路上的迷茫与困惑，因此希望通过自己的经验和努力，为学弟学妹们点亮前行的道路。无论是学习方法、专业选择、还是升学规划，我们都愿意倾囊相授，与你一起成长。
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Award,
                label: "优质文章",
                value: "50+",
                gradient: "from-amber-300 to-amber-400",
              },
              {
                icon: Users,
                label: "服务学生",
                value: "300+",
                gradient: "from-purple-300 to-purple-400",
              },
              {
                icon: Heart,
                label: "用心服务",
                value: "100%",
                gradient: "from-rose-300 to-rose-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-3xl md:rounded-[40px] shadow-md hover:shadow-lg transition-all flex flex-col"
                style={{ padding: "32px 28px" }}
              >
                <div
                  className="flex items-center gap-10"
                  style={{ marginBottom: "0" }}
                >
                  <div
                    className={`w-[75px] h-[75px] md:w-[91px] md:h-[91px] rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md flex-shrink-0`}
                  >
                    <item.icon className="w-11 h-11 md:w-[52px] md:h-[52px] text-white" />
                  </div>
                  <p
                    className="text-[#48556a] font-bold"
                    style={{ fontSize: "28px" }}
                  >
                    {item.label}
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <p
                    className="font-extrabold text-black"
                    style={{
                      fontSize: "86px",
                      lineHeight: "1.1",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Network */}
      <section className="section-spacing bg-[#F5F5F5]">
        <div
          className="container-custom max-w-5xl"
          style={{ margin: "0 auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black text-center"
              style={{ marginBottom: "29px" }}
            >
              指南网络
            </h2>

            {/* Platform Icons */}
            <div
              className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12"
              style={{ marginBottom: "53px" }}
            >
              {platforms.map((platform, index) => (
                <motion.button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(index)}
                  className={`rounded-[24px] transition-all duration-300 shadow-md ${
                    selectedPlatform === index
                      ? "bg-[#0067D1] text-white shadow-xl"
                      : "bg-white text-[#A8A8A8] hover:bg-slate-50 hover:text-[#0067D1]"
                  }`}
                  style={{
                    padding: "24px",
                  }}
                  animate={{
                    scale: selectedPlatform === index ? 1.1 : 1,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {platform.icon}
                </motion.button>
              ))}
            </div>

            {/* Platform Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlatform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Image Section */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center"
                    style={{
                      boxShadow:
                        "0 4px 20px rgba(0, 0, 0, 0.08), 0 -2px 10px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    {platforms[selectedPlatform].image ? (
                      <img
                        src={platforms[selectedPlatform].image}
                        alt={platforms[selectedPlatform].name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200"
                        style={{ minHeight: "360px" }}
                      >
                        <div className="text-center">
                          <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-slate-400 mx-auto mb-4" />
                          <p className="text-xl md:text-2xl font-bold text-slate-500">
                            正在建设中
                          </p>
                          <p className="text-sm md:text-base text-slate-400 mt-2">
                            敬请期待
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#FFFFFF] rounded-2xl md:rounded-3xl shadow-lg flex flex-col justify-center"
                    style={{ padding: "36px 52px" }}
                  >
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl font-bold text-black"
                      style={{ marginBottom: "20px" }}
                    >
                      {platforms[selectedPlatform].name}
                    </h3>
                    <p
                      className="text-base md:text-lg text-[#48556a] leading-relaxed"
                      style={{ marginBottom: "28px" }}
                    >
                      {platforms[selectedPlatform].description}
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                      {platforms[selectedPlatform].features.map(
                        (feature, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-xl shadow-sm"
                            style={{ padding: "16px 20px" }}
                          >
                            <p className="text-sm md:text-base text-[#0067D1] font-semibold">
                              {feature}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Team Members Carousel */}
      <section className="section-spacing">
        <div
          className="container-custom max-w-5xl"
          style={{ margin: "0 auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black text-center"
              style={{ marginBottom: "40px" }}
            >
              核心成员
            </h2>

            <div className="relative">
              <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap');
                .font-art { font-family: 'ZCOOL XiaoWei', serif; letter-spacing: 2px; }
                .font-story { font-family: 'Noto Serif SC', serif; }
                .ma-shan-zheng-regular {
                  font-family: "Ma Shan Zheng", cursive;
                  font-weight: 400;
                  font-style: normal;
                }

                .zhi-mang-xing-regular {
                  font-family: "Zhi Mang Xing", cursive;
                  font-weight: 400;
                  font-style: normal;
                }

                /* 强制响应式布局 */
                .member-card-inner {
                  display: flex;
                  flex-direction: column; /* 手机端默认上下 */
                  align-items: center;
                  gap: 32px;
                  position: relative;
                  z-index: 10;
                }
                .member-avatar-box {
                  width: 160px; /* 手机端头像大小 */
                  height: 160px;
                  flex-shrink: 0;
                }
                
                @media (min-width: 768px) {
                  .member-card-inner {
                    flex-direction: row; /* 电脑端左右排布 */
                    align-items: stretch;
                    gap: 48px;
                  }
                  .member-avatar-box {
                    width: 240px; /* 电脑端大头像 */
                    height: 240px;
                  }
                }
              `}} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMember}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-10 bg-white mx-auto overflow-hidden"
                  style={{ 
                    marginBottom: "10px", padding: "40px", borderRadius: "32px",
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(255,255,255,0.8)"
                  }}
                >
                  
                  <div style={{
                    position: "absolute", top: 0, right: 0, bottom: 0, left: 0,
                    background: `
                      radial-gradient(circle at top right, ${teamMembers[currentMember].themeColor}25 0%, transparent 45%),
                      radial-gradient(circle at bottom left, ${teamMembers[currentMember].themeColor}10 0%, transparent 35%)
                    `,
                    zIndex: 0, pointerEvents: "none",
                    transition: "background 0.5s ease"
                  }} />

                  <div className="member-card-inner">

                    {/* === 左侧：头像区 === */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "10px" }}>
                      <div className="member-avatar-box" style={{ position: "relative" }}>
                        <div style={{
                          position: "absolute", top: "-10px", left: "-10px", right: "-10px", bottom: "-10px",
                          background: `radial-gradient(circle, ${teamMembers[currentMember].themeColor}88 0%, transparent 60%)`,
                          filter: "blur(15px)", zIndex: 0, borderRadius: "50%",
                          transition: "background 0.5s ease"
                        }} />
                        
                        <img 
                          src={teamMembers[currentMember].avatar} 
                          alt={teamMembers[currentMember].name}
                          style={{
                            width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%",
                            position: "relative", zIndex: 1, border: "4px solid white",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
                          }}
                        />
                      </div>
                    </div>

                    {/* === 右侧：内容区 === */}
                    <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", width: "100%" }}>
                      
                      <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
                        
                        <div style={{ display: "flex", alignItems: "flex-end", gap: "16px" }}>
                          <h3 className="ma-shan-zheng-regular" style={{ fontSize: "2.8rem", color: "#1a1a1a", margin: 0, lineHeight: 1 }}>
                            {teamMembers[currentMember].name}
                          </h3>
                          <span style={{ 
                            fontSize: "2.0rem", fontWeight: 900, margin: 0, lineHeight: 1,
                            backgroundImage: `linear-gradient(to right, ${teamMembers[currentMember].themeColor}, #00BCD4)`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                          }}>
                            「{teamMembers[currentMember].role}」
                          </span>
                        </div>

                        <span style={{ 
                          fontSize: "1.05rem", color: "#64748b", margin: 0, 
                          lineHeight: 2, fontWeight: 500, letterSpacing: "1px" 
                        }}>
                          {teamMembers[currentMember].university}
                        </span>
                        
                      </div>

                      <div style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "12px",
                        marginBottom: "32px", 
                        width: "100%" 
                      }}>
                        {teamMembers[currentMember].tags?.reduce((result: string[][], value, index, array) => {
                          if (index % 2 === 0) result.push(array.slice(index, index + 2));
                          return result;
                        }, []).map((pair, rowIndex) => (
                          
                          <div 
                            key={rowIndex} 
                            style={{ 
                              display: "flex", 
                              flexWrap: "wrap", 
                              rowGap: "12px", 
                              columnGap: "clamp(8px, 4vw, 24px)", 
                              justifyContent: "flex-start" 
                            }}
                          >
                            {pair.map((tag, colIndex) => {
                              const hexToRgba = (hex: string, alpha: number) => {
                                const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
                                return `rgba(${r}, ${g}, ${b}, ${alpha})`;
                              };
                              const glow = hexToRgba(teamMembers[currentMember].themeColor, 0.12);
                              
                              return (
                                <span
                                  key={colIndex} 
                                  style={{ 
                                    display: "inline-block", 
                                    padding: "6px 32px", 
                                    fontFamily: "PianPian", 
                                    fontSize: "0.9rem", 
                                    color: "#48556a", 
                                    fontWeight: 400, 
                                    letterSpacing: "1px",
                                    background: `linear-gradient(90deg, transparent 0%, ${glow} 20%, ${glow} 80%, transparent 100%)`
                                  }}
                                >
                                  {tag}
                                </span>
                              );
                            })}
                          </div>
                        ))}
                      </div>

                      <div className="font-story" style={{ 
                        position: "relative", 
                        background: "#f8fafc", 
                        borderRadius: "16px", 
                        padding: "36px 48px", 
                        border: "1px solid #f1f5f9"
                      }}>
                        <span style={{ 
                          position: "absolute", top: "12px", left: "16px", 
                          fontSize: "64px", fontFamily: "Georgia, serif", 
                          color: teamMembers[currentMember].themeColor,
                          lineHeight: 1, userSelect: "none", transition: "color 0.5s ease"
                        }}>
                          “
                        </span>
                        
                        <p style={{ 
                          margin: 0, textIndent: "2em", color: "#48556a", 
                          lineHeight: 1.5, fontFamily:"Zhi Mang Xing",fontSize: "1.5rem", position: "relative", zIndex: 1 
                        }}>
                          {teamMembers[currentMember].message}
                        </p>

                        <span style={{ 
                          position: "absolute", bottom: "-12px", right: "16px", 
                          fontSize: "64px", fontFamily: "Georgia, serif", 
                          color: teamMembers[currentMember].themeColor, 
                          lineHeight: 1, userSelect: "none", transition: "color 0.5s ease"
                        }}>
                          ”
                        </span>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center items-center gap-6 relative z-10" style={{ marginTop: "40px" }}>
                <motion.button
                  onClick={prevMember}
                  disabled={currentMember === 0}
                  className="p-4 md:p-5 rounded-full transition-all shadow-md"
                  style={{
                    backgroundColor: currentMember === 0 ? "#e2e8f0" : teamMembers[currentMember].themeColor,
                    color: currentMember === 0 ? "#94a3b8" : "white",
                    cursor: currentMember === 0 ? "not-allowed" : "pointer"
                  }}
                  whileHover={currentMember === 0 ? {} : { scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)" }}
                  whileTap={currentMember === 0 ? {} : { scale: 0.9 }}
                >
                  <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
                </motion.button>

                <div className="flex items-center gap-3">
                  {teamMembers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMember(index)}
                      className="h-2.5 rounded-full transition-all duration-300"
                      style={{
                        width: index === currentMember ? "40px" : "10px",
                        backgroundColor: index === currentMember ? teamMembers[currentMember].themeColor : "#cbd5e1"
                      }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextMember}
                  disabled={currentMember === teamMembers.length - 1}
                  className="p-4 md:p-5 rounded-full transition-all shadow-md"
                  style={{
                    backgroundColor: currentMember === teamMembers.length - 1 ? "#e2e8f0" : teamMembers[currentMember].themeColor,
                    color: currentMember === teamMembers.length - 1 ? "#94a3b8" : "white",
                    cursor: currentMember === teamMembers.length - 1 ? "not-allowed" : "pointer"
                  }}
                  whileHover={currentMember === teamMembers.length - 1 ? {} : { scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)" }}
                  whileTap={currentMember === teamMembers.length - 1 ? {} : { scale: 0.9 }}
                >
                  <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="section-spacing bg-[#F5F5F5]">
        <div
          className="container-custom max-w-5xl"
          style={{ margin: "0 auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-8 md:mb-12 text-center">
              联系我们
            </h2>
            <p
              className="text-base md:text-lg text-[#48556a] text-center"
              style={{ marginBottom: "40px" }}
            >
              欢迎通过以下方式与我们取得联系
            </p>

            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {/* Left side - Contact Cards */}
              <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Email Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-white rounded-2xl md:rounded-3xl transition-all shadow-md hover:shadow-lg"
                  style={{ padding: "28px 24px" }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md flex-shrink-0">
                      <Mail className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">
                      邮箱联系
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#48556a]" style={{ marginBottom: '12px' }}>
                    发送邮件至我们的官方邮箱，我们会尽快回复您的问题
                  </p>
                  <a
                    href="mailto:guide_zzyz@163.com"
                    className="text-[#0067D1] font-semibold text-base md:text-lg hover:underline inline-block"
                  >
                    guide_zzyz@163.com
                  </a>
                </motion.div>

                {/* WeChat Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-white rounded-2xl md:rounded-3xl transition-all shadow-md hover:shadow-lg"
                  style={{ padding: "28px 24px" }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-md flex-shrink-0">
                      <QrCode className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-black">
                      微信公众号
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#48556a]">
                    扫描右侧二维码关注我们的微信公众号，获取最新资讯
                  </p>
                </motion.div>
              </div>

              {/* Right side - QR Code */}
              <div style={{ flex: '0 0 auto', display: 'flex', minWidth: '280px' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl md:rounded-3xl shadow-lg w-full flex flex-col justify-center items-center"
                  style={{ padding: '32px', textAlign: 'center' }}
                >
                  <div className="w-48 h-48 md:w-56 md:h-56 bg-slate-50 rounded-xl flex items-center justify-center shadow-sm mx-auto overflow-hidden" style={{ marginBottom: '16px' }}>
                    <img
                      src={ImageQrCode}
                      alt="公众号二维码"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-base md:text-lg font-bold text-black" style={{ marginBottom: '4px' }}>
                    求学指南酱
                  </p>
                  <p className="text-sm text-[#707070]">
                    微信公众号
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}