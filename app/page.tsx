"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Heart,
  MessageCircle,
  Share2,
  Flame,
  Eye,
  UserPlus,
  Play,
  Sparkles,
  Brain,
  Tv,
  Target,
  Users,
  ThumbsUp,
  Send,
  BarChart3,
  TrendingUp,
  Calendar,
  Rocket,
} from "lucide-react";

const contentTypes = [
  {
    title: "知识型内容",
    eng: "INFORMATIONAL",
    color: "from-cyan-400 to-blue-500",
    icon: Brain,
    desc:
      "通过有趣知识、电视历史、隐藏功能、游戏技巧与科技内容提高分享率与收藏率。",
    engDesc:
      "Fun facts, TV history, gaming tricks and knowledge-driven content.",
    kpi: "收藏 + 分享",
    engKpi: "SAVES + SHARES",
  },
  {
    title: "情感型内容",
    eng: "EMOTIONAL",
    color: "from-orange-400 to-red-500",
    icon: Heart,
    desc:
      "通过情感故事、电影之夜、怀旧氛围与真实生活场景建立情感连接。",
    engDesc:
      "Emotional storytelling, nostalgia and relatable moments.",
    kpi: "观看量 + 点赞",
    engKpi: "VIEWS + LIKES",
  },
  {
    title: "互动型内容",
    eng: "INTERACTIVE",
    color: "from-green-400 to-emerald-500",
    icon: MessageCircle,
    desc:
      "通过投票、问答、观众评论与互动形式提高参与率。",
    engDesc:
      "Polls, quizzes and audience engagement formats.",
    kpi: "评论 + 互动率",
    engKpi: "COMMENTS + ENGAGEMENT",
  },
  {
    title: "连续剧情内容",
    eng: "SERIES",
    color: "from-pink-400 to-purple-500",
    icon: Play,
    desc:
      "通过固定角色与连续剧情提高留存率与粉丝增长。",
    engDesc:
      "Recurring characters and episodic storytelling.",
    kpi: "粉丝增长 + 留存",
    engKpi: "FOLLOWERS + RETENTION",
  },
];

const schedule = [
  ["13-05", "Informational", "5 TV Facts"],
  ["15-05", "Emotional", "Family Movie Night"],
  ["17-05", "Interactive", "Rate This Setup"],
  ["19-05", "Series", "Rhea & Kabir Ep.1"],
  ["21-05", "Informational", "Hidden TV Tricks"],
  ["23-05", "Emotional", "Cricket Watch Party"],
  ["25-05", "Interactive", "Gaming Setup Poll"],
  ["27-05", "Series", "Rhea & Kabir Ep.2"],
];

const floatingIcons = [
  Heart,
  UserPlus,
  MessageCircle,
  Share2,
  ThumbsUp,
  Send,
];

export default function Page() {
  return (
    <main className="bg-black text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-purple-500/20 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              mb-10
            "
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />

            <p className="uppercase tracking-[0.35em] text-[11px] text-gray-300">
              COOCAA SOCIAL MEDIA STRATEGY 2026
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="
              text-5xl
              md:text-7xl
              lg:text-[92px]
              font-black
              tracking-[-0.06em]
              leading-[0.9]
              text-transparent
              bg-clip-text
              bg-gradient-to-b
              from-white
              via-[#d5e4ff]
              to-[#7c3aed]
            "
          >
            酷开可以占领
            <br />
            Instagram
          </motion.h1>

          <p className="mt-10 text-lg md:text-xl text-gray-400 tracking-[0.18em] uppercase">
            BUILDING A CULTURALLY RELEVANT ENTERTAINMENT TECH BRAND
          </p>
        </div>
      </section>

      {/* WHAT WE LACK */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl md:text-6xl font-black leading-[1.1]">
              我们在卖产品
              <br />
              但用户关注的是故事
            </h2>

            <p className="mt-8 text-lg md:text-xl text-gray-400 tracking-[0.2em] uppercase">
              PEOPLE FOLLOW STORIES, NOT PRODUCTS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              {
                title: "缺少情感故事",
                eng: "No emotional storytelling",
                icon: Tv,
                image: "/lack-storytelling.jpg",
              },
              {
                title: "缺少用户互动",
                eng: "No audience interaction",
                icon: MessageCircle,
                image: "/lack-engagement.jpg",
              },
              {
                title: "缺少连续剧情",
                eng: "No recurring series",
                icon: Play,
                image: "/lack-series.jpg",
              },
              {
                title: "缺少留存策略",
                eng: "No retention strategy",
                icon: Target,
                image: "/lack-retention.jpg",
              },
            ].map((item, i) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-3xl
                    overflow-hidden
                  "
                >

                  <Image
                    src={item.image}
                    alt={item.eng}
                    width={800}
                    height={500}
                    className="
                      w-full
                      h-[180px]
                      object-cover
                      opacity-70
                    "
                  />

                  <div className="p-8">

                    <div className="flex items-center gap-5 mb-6">

                      <div className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-red-500/10
                        border
                        border-red-500/20
                        flex
                        items-center
                        justify-center
                      ">
                        <Icon className="w-7 h-7 text-red-400" />
                      </div>

                      <div>

                        <h3 className="text-3xl font-black">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500 uppercase tracking-[0.15em]">
                          {item.eng}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      当前内容更像产品目录，而不是具有娱乐性与文化影响力的品牌页面。
                    </p>

                    <p className="mt-4 text-gray-500 text-sm uppercase tracking-[0.1em]">
                      CONTENT LACKS CULTURAL & EMOTIONAL VALUE
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTENT PILLARS */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl md:text-6xl font-black">
              四大内容支柱
            </h2>

            <p className="mt-8 text-lg text-gray-400 tracking-[0.2em] uppercase">
              THE 4 CONTENT PILLARS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {contentTypes.map((item, i) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.03,
                    rotateX: 2,
                    rotateY: -2,
                  }}
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-3xl
                    overflow-hidden
                    relative
                  "
                >

                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />

                  <div className="relative z-10 p-8">

                    <div className="flex items-center gap-5 mb-8">

                      <div className={`w-20 h-20 rounded-[24px] bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      <div>

                        <h3 className="text-3xl font-black">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500 uppercase tracking-[0.15em]">
                          {item.eng}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>

                    <p className="mt-5 text-sm text-gray-500 uppercase tracking-[0.12em]">
                      {item.engDesc}
                    </p>

                    <div className="mt-8 rounded-[24px] border border-white/10 bg-black/20 p-5">

                      <p className="text-3xl font-black text-white">
                        {item.kpi}
                      </p>

                      <p className="mt-2 text-sm text-gray-500 uppercase tracking-[0.15em]">
                        {item.engKpi}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RHEA & KABIR */}
      <section className="py-40 px-6 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10" />

        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="
              text-5xl
              md:text-7xl
              lg:text-[90px]
              font-black
              leading-[0.9]
              text-transparent
              bg-clip-text
              bg-gradient-to-b
              from-white
              via-pink-200
              to-purple-400
            ">
              RHEA & KABIR
              <br />
              具有爆款潜力
            </h2>

            <p className="mt-8 text-lg text-gray-400 tracking-[0.18em] uppercase">
              POTENTIAL VIRAL SERIES
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="
              relative
              rounded-[40px]
              overflow-hidden
              border
              border-white/10
            "
          >

            <Image
              src="/rhea-kabir.png"
              alt="Rhea Kabir"
              width={1920}
              height={1080}
              className="w-full aspect-video object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 max-w-2xl">

              <div className="
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                bg-red-500
                text-white
                font-bold
                mb-6
              ">
                <Flame className="w-5 h-5" />

                VIRAL STORY FORMAT
              </div>

              <h3 className="text-4xl md:text-6xl font-black leading-[0.95]">
                连续剧情
                <br />
                提高用户留存
              </h3>

              <p className="mt-5 text-gray-300 text-lg uppercase tracking-[0.12em]">
                RECURRING STORYTELLING CREATES RETENTION
              </p>
            </div>

            <div className="
              hidden
              lg:flex
              absolute
              top-8
              right-8
              bg-white/[0.05]
              backdrop-blur-3xl
              border
              border-white/10
              rounded-[28px]
              p-5
              flex-col
              gap-5
            ">

              {([
                ["2.4M", "Views", Eye],
                ["184K", "Likes", Heart],
                ["32K", "Shares", Share2],
                ["12K+", "Followers", UserPlus],
              ] as [string, string, any][]).map(
                ([value, label, Icon], i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >

                    <div
                      className="
                        w-11
                        h-11
                        rounded-2xl
                        bg-white/10
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">
                        {label}
                      </p>

                      <h4 className="text-xl font-black text-white">
                        {value}
                      </h4>
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TARGETS */}
      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-6xl font-black leading-[1.1]">
            预期增长目标
          </h2>

          <p className="mt-8 text-lg text-gray-400 tracking-[0.2em] uppercase">
            EXPECTED GROWTH TARGET
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

            <div className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-3xl
              p-8
            ">

              <BarChart3 className="w-14 h-14 text-cyan-300 mx-auto mb-6" />

              <h3 className="text-4xl font-black text-cyan-300">
                240K+
              </h3>

              <p className="mt-3 text-2xl text-white">
                两周预期观看量
              </p>

              <p className="mt-3 text-sm text-gray-500 uppercase tracking-[0.15em]">
                EXPECTED 2 WEEK VIEWS
              </p>
            </div>

            <div className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-3xl
              p-8
            ">

              <Users className="w-14 h-14 text-pink-300 mx-auto mb-6" />

              <h3 className="text-4xl font-black text-pink-300">
                200+
              </h3>

              <p className="mt-3 text-2xl text-white">
                两周预期粉丝增长
              </p>

              <p className="mt-3 text-sm text-gray-500 uppercase tracking-[0.15em]">
                EXPECTED FOLLOWERS
              </p>
            </div>
          </div>

          <div className="
            mt-12
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
            p-8
          ">

            <p className="text-2xl leading-relaxed text-white">
              通过前两周测试，我们将识别最适合算法的内容形式与用户行为模式。
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed uppercase tracking-[0.08em]">
              AFTER THE FIRST 2 WEEK CYCLE WE IDENTIFY THE BEST PERFORMING CONTENT FORMAT
            </p>

            <div className="w-full h-[1px] bg-white/10 my-8" />

            <p className="text-2xl leading-relaxed text-white">
              随着持续优化与稳定输出，5–6个月后内容生态将逐渐形成自然增长。
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed uppercase tracking-[0.08em]">
              WITH CONSISTENCY OUR CONTENT ECOSYSTEM CAN BECOME SELF-SUSTAINING
            </p>
          </div>
        </div>
      </section>

      {/* BOOST STRATEGY */}
      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-6xl font-black">
            智能投流策略
          </h2>

          <p className="mt-8 text-lg text-gray-400 tracking-[0.2em] uppercase">
            SMART BOOST STRATEGY
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

            {[
              {
                value: "₹500",
                label: "PER POST BOOST",
                icon: Rocket,
              },
              {
                value: "12–15",
                label: "POSTS PER MONTH",
                icon: Calendar,
              },
              {
                value: "₹5K–₹6K",
                label: "MONTHLY BUDGET",
                icon: TrendingUp,
              },
            ].map((item, i) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-3xl
                    p-8
                  "
                >

                  <div className="
                    w-20
                    h-20
                    rounded-[24px]
                    bg-green-500/10
                    border
                    border-green-500/20
                    flex
                    items-center
                    justify-center
                    mx-auto
                    mb-6
                  ">
                    <Icon className="w-10 h-10 text-green-300" />
                  </div>

                  <h3 className="text-4xl font-black text-cyan-300">
                    {item.value}
                  </h3>

                  <p className="mt-4 text-gray-400 tracking-[0.12em] uppercase">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-6xl font-black">
              内容执行时间表
            </h2>

            <p className="mt-8 text-lg text-gray-400 tracking-[0.2em] uppercase">
              CONTENT EXECUTION SCHEDULE
            </p>
          </div>

          <div className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
            overflow-hidden
          ">

            <div className="grid grid-cols-3 border-b border-white/10 p-6 text-gray-400 uppercase tracking-[0.25em] text-xs">
              <div>Date</div>
              <div>Content Type</div>
              <div>Topic</div>
            </div>

            {schedule.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
                className="
                  grid
                  grid-cols-3
                  p-6
                  border-b
                  border-white/5
                "
              >
                <div className="font-bold text-white">
                  {item[0]}
                </div>

                <div className="text-cyan-300">
                  {item[1]}
                </div>

                <div className="text-gray-300">
                  {item[2]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
              {/* OBJECTIVE */}
<section className="py-32 px-6">

  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl md:text-6xl font-black leading-[1.1]">
      内容测试目标
    </h2>

    <p className="mt-8 text-lg text-gray-400 tracking-[0.2em] uppercase">
      OBJECTIVE & ALGORITHM STUDY
    </p>

    <div
      className="
        mt-16
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-3xl
        p-10
      "
    >

      <div className="flex items-center justify-center mb-8">
        <BarChart3 className="w-14 h-14 text-cyan-300" />
      </div>

      <p className="text-3xl leading-relaxed text-white">
        前两周的核心目标，
        是研究哪一种内容最适合算法，
        哪一种内容最容易获得观看量、分享率与互动率。
      </p>

      <p className="mt-8 text-lg text-gray-400 leading-relaxed uppercase tracking-[0.08em]">
        THE FIRST 2 WEEK CYCLE IS DESIGNED TO STUDY
        WHICH CONTENT FORMAT PERFORMS BEST ORGANICALLY
      </p>

      <div className="w-full h-[1px] bg-white/10 my-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

        <div
          className="
            rounded-[24px]
            border
            border-white/10
            bg-black/20
            p-8
          "
        >

          <p className="text-cyan-300 text-xl font-bold mb-4">
            初始投流
          </p>

          <h3 className="text-5xl font-black text-white">
            25 • 25 • 25 • 25
          </h3>

          <p className="mt-5 text-gray-400 leading-relaxed">
            初始阶段，我们平均测试四种内容类型，
            观察哪一种内容最容易获得高流量与高互动。
          </p>

          <p className="mt-5 text-sm text-gray-500 uppercase tracking-[0.12em]">
            EQUAL BOOST DISTRIBUTION FOR TESTING
          </p>
        </div>

        <div
          className="
            rounded-[24px]
            border
            border-cyan-500/20
            bg-cyan-500/5
            p-8
          "
        >

          <p className="text-pink-300 text-xl font-bold mb-4">
            优化后投流
          </p>

          <h3 className="text-5xl font-black bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
            20 • 20 • 20 • 40
          </h3>

          <p className="mt-5 text-gray-300 leading-relaxed">
            一旦发现某种内容具有爆款潜力，
            我们会将更多预算集中在高表现内容上，
            放大其传播范围与增长速度。
          </p>

          <p className="mt-5 text-sm text-gray-500 uppercase tracking-[0.12em]">
            SHIFT BOOST TOWARDS HIGH PERFORMING REELS
          </p>
        </div>
      </div>

      <div className="mt-12">

        <p className="text-2xl text-white leading-relaxed">
          我们不是随机发内容，
          而是在研究算法、用户心理与传播行为。
        </p>

        <p className="mt-6 text-gray-400 uppercase tracking-[0.1em]">
          WE ARE STUDYING THE ALGORITHM, NOT GUESSING CONTENT
        </p>
      </div>
    </div>
  </div>
</section>
      {/* FINAL */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">

          {Array.from({ length: 140 }).map((_, i) => {

            const RandomIcon =
              floatingIcons[
                Math.floor(Math.random() * floatingIcons.length)
              ];

            return (
              <motion.div
                key={i}
                initial={{
                  y: "-10vh",
                  x: `${Math.random() * 100}vw`,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: "120vh",
                  rotate: Math.random() * 720,
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.5, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute"
              >
                <RandomIcon className="w-7 h-7 text-pink-400" />
              </motion.div>
            );
          })}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">

          <h2 className="
            text-5xl
            md:text-[95px]
            leading-[0.9]
            font-black
            tracking-[-0.06em]
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-white
            via-[#c7dcff]
            to-[#7c3aed]
          ">
            我们不是在运营账号
          </h2>

          <h3 className="
            mt-8
            text-5xl
            md:text-[82px]
            font-black
            tracking-[-0.06em]
            bg-gradient-to-r
            from-cyan-300
            to-pink-400
            bg-clip-text
            text-transparent
          ">
            我们是在创造文化
          </h3>

          <p className="mt-10 text-lg text-gray-400 tracking-[0.18em] uppercase">
            WE ARE BUILDING CULTURE
          </p>
        </div>
      </section>
    </main>
  );
}