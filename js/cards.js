// tarot-html-version/js/cards.js
// 完整78张塔罗牌数据模板，适用于中文塔罗项目
// 图片路径请确保与实际文件一致

const tarotCards = [
  // 大阿卡纳 Major Arcana 0-21
  { id: 0, name: "愚者", image: "images/cards/major/major-00-The-Fool.jpg", suit: "major", upright: { keywords: "新的开始", description: "新的旅程与冒险。" }, reversed: { keywords: "鲁莽", description: "轻率与风险。" } },
  { id: 1, name: "魔术师", image: "images/cards/major/major-01-The-Magician.jpg", suit: "major", upright: { keywords: "创造力", description: "实现想法的能力。" }, reversed: { keywords: "欺骗", description: "技能滥用。" } },
  { id: 2, name: "女祭司", image: "images/cards/major/major-02-The-High-Priestess.jpg", suit: "major", upright: { keywords: "直觉", description: "倾听内心。" }, reversed: { keywords: "秘密", description: "忽视直觉。" } },
  { id: 3, name: "皇后", image: "images/cards/major/major-03-The-Empress.jpg", suit: "major", upright: { keywords: "丰饶", description: "成长与养育。" }, reversed: { keywords: "依赖", description: "创造力阻塞。" } },
  { id: 4, name: "皇帝", image: "images/cards/major/major-04-The-Emperor.jpg", suit: "major", upright: { keywords: "权威", description: "秩序与控制。" }, reversed: { keywords: "专制", description: "刚性与不成熟。" } },
  { id: 5, name: "教皇", image: "images/cards/major/major-05-The-Hierophant.jpg", suit: "major", upright: { keywords: "传统", description: "精神指导。" }, reversed: { keywords: "反叛", description: "挑战权威。" } },
  { id: 6, name: "恋人", image: "images/cards/major/major-06-The-Lovers.jpg", suit: "major", upright: { keywords: "爱情", description: "和谐与选择。" }, reversed: { keywords: "分歧", description: "不和与诱惑。" } },
  { id: 7, name: "战车", image: "images/cards/major/major-07-The-Chariot.jpg", suit: "major", upright: { keywords: "胜利", description: "意志与掌控。" }, reversed: { keywords: "失控", description: "方向迷失。" } },
  { id: 8, name: "力量", image: "images/cards/major/major-08-Strength.jpg", suit: "major", upright: { keywords: "勇气", description: "内在力量。" }, reversed: { keywords: "软弱", description: "缺乏自信。" } },
  { id: 9, name: "隐士", image: "images/cards/major/major-09-The-Hermit.jpg", suit: "major", upright: { keywords: "内省", description: "寻找真理。" }, reversed: { keywords: "孤立", description: "逃避现实。" } },
  { id: 10, name: "命运之轮", image: "images/cards/major/major-10-Wheel-of-Fortune.jpg", suit: "major", upright: { keywords: "转变", description: "命运变化。" }, reversed: { keywords: "阻碍", description: "不顺与停滞。" } },
  { id: 11, name: "正义", image: "images/cards/major/major-11-Justice.jpg", suit: "major", upright: { keywords: "公正", description: "公平与责任。" }, reversed: { keywords: "不公", description: "偏见与逃避。" } },
  { id: 12, name: "倒吊人", image: "images/cards/major/major-12-The-Hanged-Man.jpg", suit: "major", upright: { keywords: "牺牲", description: "等待与转变。" }, reversed: { keywords: "停滞", description: "无谓牺牲。" } },
  { id: 13, name: "死神", image: "images/cards/major/major-13-Death.jpg", suit: "major", upright: { keywords: "结束", description: "新生与转化。" }, reversed: { keywords: "抗拒", description: "害怕改变。" } },
  { id: 14, name: "节制", image: "images/cards/major/major-14-Temperance.jpg", suit: "major", upright: { keywords: "平衡", description: "调和与节制。" }, reversed: { keywords: "失衡", description: "极端与冲突。" } },
  { id: 15, name: "恶魔", image: "images/cards/major/major-15-The-Devil.jpg", suit: "major", upright: { keywords: "束缚", description: "诱惑与依赖。" }, reversed: { keywords: "解脱", description: "摆脱束缚。" } },
  { id: 16, name: "高塔", image: "images/cards/major/major-16-The-Tower.jpg", suit: "major", upright: { keywords: "突变", description: "危机与觉醒。" }, reversed: { keywords: "避免", description: "灾难减轻。" } },
  { id: 17, name: "星星", image: "images/cards/major/major-17-The-Star.jpg", suit: "major", upright: { keywords: "希望", description: "灵感与治愈。" }, reversed: { keywords: "失望", description: "缺乏信心。" } },
  { id: 18, name: "月亮", image: "images/cards/major/major-18-The-Moon.jpg", suit: "major", upright: { keywords: "幻象", description: "直觉与迷茫。" }, reversed: { keywords: "困惑", description: "恐惧与欺骗。" } },
  { id: 19, name: "太阳", image: "images/cards/major/major-19-The-Sun.jpg", suit: "major", upright: { keywords: "成功", description: "快乐与成就。" }, reversed: { keywords: "延迟", description: "短暂的快乐。" } },
  { id: 20, name: "审判", image: "images/cards/major/major-20-Judgement.jpg", suit: "major", upright: { keywords: "觉醒", description: "复苏与决定。" }, reversed: { keywords: "犹豫", description: "自我怀疑。" } },
  { id: 21, name: "世界", image: "images/cards/major/major-21-The-World.jpg", suit: "major", upright: { keywords: "完成", description: "圆满与成就。" }, reversed: { keywords: "未完成", description: "延迟与停滞。" } },

  // 小阿卡纳 权杖 Wands 22-35
  { id: 22, name: "权杖一", image: "images/cards/minor/wands/wands-01-Ace-of-Wands.jpg", suit: "wands", upright: { keywords: "新机会", description: "充满活力的开始。" }, reversed: { keywords: "延迟", description: "机会错失。" } },
  { id: 23, name: "权杖二", image: "images/cards/minor/wands/wands-02-Two-of-Wands.jpg", suit: "wands", upright: { keywords: "计划", description: "展望未来。" }, reversed: { keywords: "犹豫", description: "缺乏远见。" } },
  { id: 24, name: "权杖三", image: "images/cards/minor/wands/wands-03-Three-of-Wands.jpg", suit: "wands", upright: { keywords: "扩展", description: "机会与成长。" }, reversed: { keywords: "延误", description: "计划受阻。" } },
  { id: 25, name: "权杖四", image: "images/cards/minor/wands/wands-04-Four-of-Wands.jpg", suit: "wands", upright: { keywords: "庆祝", description: "家庭与和谐。" }, reversed: { keywords: "不和", description: "延迟庆祝。" } },
  { id: 26, name: "权杖五", image: "images/cards/minor/wands/wands-05-Five-of-Wands.jpg", suit: "wands", upright: { keywords: "竞争", description: "冲突与挑战。" }, reversed: { keywords: "避免冲突", description: "合作机会。" } },
  { id: 27, name: "权杖六", image: "images/cards/minor/wands/wands-06-Six-of-Wands.jpg", suit: "wands", upright: { keywords: "胜利", description: "认可与成功。" }, reversed: { keywords: "自负", description: "失败与怀疑。" } },
  { id: 28, name: "权杖七", image: "images/cards/minor/wands/wands-07-Seven-of-Wands.jpg", suit: "wands", upright: { keywords: "防御", description: "坚持立场。" }, reversed: { keywords: "放弃", description: "压力过大。" } },
  { id: 29, name: "权杖八", image: "images/cards/minor/wands/wands-08-Eight-of-Wands.jpg", suit: "wands", upright: { keywords: "快速", description: "迅速发展。" }, reversed: { keywords: "延迟", description: "进展缓慢。" } },
  { id: 30, name: "权杖九", image: "images/cards/minor/wands/wands-09-Nine-of-Wands.jpg", suit: "wands", upright: { keywords: "坚韧", description: "坚持到底。" }, reversed: { keywords: "防备", description: "疲惫不堪。" } },
  { id: 31, name: "权杖十", image: "images/cards/minor/wands/wands-10-Ten-of-Wands.jpg", suit: "wands", upright: { keywords: "负担", description: "责任重大。" }, reversed: { keywords: "压力", description: "难以承受。" } },
  { id: 32, name: "权杖侍从", image: "images/cards/minor/wands/wands-11-Page-of-Wands.jpg", suit: "wands", upright: { keywords: "探索", description: "好奇与冒险。" }, reversed: { keywords: "冲动", description: "缺乏计划。" } },
  { id: 33, name: "权杖骑士", image: "images/cards/minor/wands/wands-12-Knight-of-Wands.jpg", suit: "wands", upright: { keywords: "热情", description: "积极进取。" }, reversed: { keywords: "鲁莽", description: "不计后果。" } },
  { id: 34, name: "权杖皇后", image: "images/cards/minor/wands/wands-13-Queen-of-Wands.jpg", suit: "wands", upright: { keywords: "自信", description: "魅力与独立。" }, reversed: { keywords: "嫉妒", description: "不安与消极。" } },
  { id: 35, name: "权杖国王", image: "images/cards/minor/wands/wands-14-King-of-Wands.jpg", suit: "wands", upright: { keywords: "领导力", description: "果断与激励。" }, reversed: { keywords: "专横", description: "冲动与固执。" } },

  // 小阿卡纳 圣杯 Cups 36-49
  { id: 36, name: "圣杯一", image: "images/cards/minor/cups/cups-01-Ace-of-Cups.jpg", suit: "cups", upright: { keywords: "新感情", description: "情感的开始。" }, reversed: { keywords: "压抑", description: "情感受阻。" } },
  { id: 37, name: "圣杯二", image: "images/cards/minor/cups/cups-02-Two-of-Cups.jpg", suit: "cups", upright: { keywords: "伙伴", description: "合作与和谐。" }, reversed: { keywords: "分离", description: "关系破裂。" } },
  { id: 38, name: "圣杯三", image: "images/cards/minor/cups/cups-03-Three-of-Cups.jpg", suit: "cups", upright: { keywords: "庆祝", description: "友谊与聚会。" }, reversed: { keywords: "过度", description: "疏远与孤立。" } },
  { id: 39, name: "圣杯四", image: "images/cards/minor/cups/cups-04-Four-of-Cups.jpg", suit: "cups", upright: { keywords: "沉思", description: "反思与无聊。" }, reversed: { keywords: "觉醒", description: "新机会。" } },
  { id: 40, name: "圣杯五", image: "images/cards/minor/cups/cups-05-Five-of-Cups.jpg", suit: "cups", upright: { keywords: "失落", description: "悲伤与遗憾。" }, reversed: { keywords: "释怀", description: "重新振作。" } },
  { id: 41, name: "圣杯六", image: "images/cards/minor/cups/cups-06-Six-of-Cups.jpg", suit: "cups", upright: { keywords: "回忆", description: "童年与怀旧。" }, reversed: { keywords: "执着", description: "停留过去。" } },
  { id: 42, name: "圣杯七", image: "images/cards/minor/cups/cups-07-Seven-of-Cups.jpg", suit: "cups", upright: { keywords: "幻想", description: "选择与诱惑。" }, reversed: { keywords: "现实", description: "清晰与决定。" } },
  { id: 43, name: "圣杯八", image: "images/cards/minor/cups/cups-08-Eight-of-Cups.jpg", suit: "cups", upright: { keywords: "放弃", description: "离开与追寻。" }, reversed: { keywords: "逃避", description: "无法放下。" } },
  { id: 44, name: "圣杯九", image: "images/cards/minor/cups/cups-09-Nine-of-Cups.jpg", suit: "cups", upright: { keywords: "满足", description: "愿望实现。" }, reversed: { keywords: "贪婪", description: "不满与空虚。" } },
  { id: 45, name: "圣杯十", image: "images/cards/minor/cups/cups-10-Ten-of-Cups.jpg", suit: "cups", upright: { keywords: "幸福", description: "家庭与和谐。" }, reversed: { keywords: "破裂", description: "不和与失望。" } },
  { id: 46, name: "圣杯侍从", image: "images/cards/minor/cups/cups-11-Page-of-Cups.jpg", suit: "cups", upright: { keywords: "灵感", description: "创造与新消息。" }, reversed: { keywords: "幼稚", description: "逃避现实。" } },
  { id: 47, name: "圣杯骑士", image: "images/cards/minor/cups/cups-12-Knight-of-Cups.jpg", suit: "cups", upright: { keywords: "浪漫", description: "追求与理想。" }, reversed: { keywords: "不切实际", description: "情感波动。" } },
  { id: 48, name: "圣杯皇后", image: "images/cards/minor/cups/cups-13-Queen-of-Cups.jpg", suit: "cups", upright: { keywords: "关怀", description: "温柔与理解。" }, reversed: { keywords: "情绪化", description: "敏感与多疑。" } },
  { id: 49, name: "圣杯国王", image: "images/cards/minor/cups/cups-14-King-of-Cups.jpg", suit: "cups", upright: { keywords: "平衡", description: "理智与情感。" }, reversed: { keywords: "压抑", description: "冷漠与逃避。" } },

  // 小阿卡纳 宝剑 Swords 50-63
  { id: 50, name: "宝剑一", image: "images/cards/minor/swords/swords-01-Ace-of-Swords.jpg", suit: "swords", upright: { keywords: "新想法", description: "清晰与真理。" }, reversed: { keywords: "混乱", description: "误解与困惑。" } },
  { id: 51, name: "宝剑二", image: "images/cards/minor/swords/swords-02-Two-of-Swords.jpg", suit: "swords", upright: { keywords: "抉择", description: "平衡与犹豫。" }, reversed: { keywords: "僵局", description: "逃避与拖延。" } },
  { id: 52, name: "宝剑三", image: "images/cards/minor/swords/swords-03-Three-of-Swords.jpg", suit: "swords", upright: { keywords: "心碎", description: "悲伤与分离。" }, reversed: { keywords: "疗愈", description: "释怀与恢复。" } },
  { id: 53, name: "宝剑四", image: "images/cards/minor/swords/swords-04-Four-of-Swords.jpg", suit: "swords", upright: { keywords: "休息", description: "恢复与静养。" }, reversed: { keywords: "不安", description: "压力与焦虑。" } },
  { id: 54, name: "宝剑五", image: "images/cards/minor/swords/swords-05-Five-of-Swords.jpg", suit: "swords", upright: { keywords: "冲突", description: "胜利与失败。" }, reversed: { keywords: "和解", description: "宽恕与理解。" } },
  { id: 55, name: "宝剑六", image: "images/cards/minor/swords/swords-06-Six-of-Swords.jpg", suit: "swords", upright: { keywords: "过渡", description: "离开与改变。" }, reversed: { keywords: "停滞", description: "难以前行。" } },
  { id: 56, name: "宝剑七", image: "images/cards/minor/swords/swords-07-Seven-of-Swords.jpg", suit: "swords", upright: { keywords: "策略", description: "隐瞒与机智。" }, reversed: { keywords: "坦白", description: "被揭穿。" } },
  { id: 57, name: "宝剑八", image: "images/cards/minor/swords/swords-08-Eight-of-Swords.jpg", suit: "swords", upright: { keywords: "束缚", description: "受限与无助。" }, reversed: { keywords: "解脱", description: "自我释放。" } },
  { id: 58, name: "宝剑九", image: "images/cards/minor/swords/swords-09-Nine-of-Swords.jpg", suit: "swords", upright: { keywords: "焦虑", description: "担忧与失眠。" }, reversed: { keywords: "释怀", description: "压力缓解。" } },
  { id: 59, name: "宝剑十", image: "images/cards/minor/swords/swords-10-Ten-of-Swords.jpg", suit: "swords", upright: { keywords: "结束", description: "痛苦与解脱。" }, reversed: { keywords: "重生", description: "恢复与希望。" } },
  { id: 60, name: "宝剑侍从", image: "images/cards/minor/swords/swords-11-Page-of-Swords.jpg", suit: "swords", upright: { keywords: "好奇", description: "警觉与观察。" }, reversed: { keywords: "鲁莽", description: "冲动与不安。" } },
  { id: 61, name: "宝剑骑士", image: "images/cards/minor/swords/swords-12-Knight-of-Swords.jpg", suit: "swords", upright: { keywords: "果断", description: "迅速行动。" }, reversed: { keywords: "冲动", description: "不计后果。" } },
  { id: 62, name: "宝剑皇后", image: "images/cards/minor/swords/swords-13-Queen-of-Swords.jpg", suit: "swords", upright: { keywords: "理性", description: "独立与清晰。" }, reversed: { keywords: "冷漠", description: "刻薄与孤立。" } },
  { id: 63, name: "宝剑国王", image: "images/cards/minor/swords/swords-14-King-of-Swords.jpg", suit: "swords", upright: { keywords: "权威", description: "智慧与判断。" }, reversed: { keywords: "专断", description: "固执与冷酷。" } },

  // 小阿卡纳 钱币 Pentacles 64-77
  { id: 64, name: "钱币一", image: "images/cards/minor/pentacles/pentacles-01-Ace-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "新机会", description: "物质与财富。" }, reversed: { keywords: "损失", description: "机会流失。" } },
  { id: 65, name: "钱币二", image: "images/cards/minor/pentacles/pentacles-02-Two-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "平衡", description: "多重任务。" }, reversed: { keywords: "混乱", description: "难以应对。" } },
  { id: 66, name: "钱币三", image: "images/cards/minor/pentacles/pentacles-03-Three-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "合作", description: "团队与技能。" }, reversed: { keywords: "分歧", description: "缺乏协作。" } },
  { id: 67, name: "钱币四", image: "images/cards/minor/pentacles/pentacles-04-Four-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "保守", description: "守财与谨慎。" }, reversed: { keywords: "放手", description: "慷慨与释放。" } },
  { id: 68, name: "钱币五", image: "images/cards/minor/pentacles/pentacles-05-Five-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "匮乏", description: "贫困与困难。" }, reversed: { keywords: "改善", description: "希望与支持。" } },
  { id: 69, name: "钱币六", image: "images/cards/minor/pentacles/pentacles-06-Six-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "施与受", description: "慷慨与帮助。" }, reversed: { keywords: "不平衡", description: "自私与依赖。" } },
  { id: 70, name: "钱币七", image: "images/cards/minor/pentacles/pentacles-07-Seven-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "耐心", description: "等待与收获。" }, reversed: { keywords: "焦虑", description: "缺乏成果。" } },
  { id: 71, name: "钱币八", image: "images/cards/minor/pentacles/pentacles-08-Eight-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "专注", description: "努力与学习。" }, reversed: { keywords: "疏忽", description: "缺乏动力。" } },
  { id: 72, name: "钱币九", image: "images/cards/minor/pentacles/pentacles-09-Nine-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "独立", description: "成就与享受。" }, reversed: { keywords: "依赖", description: "失去自由。" } },
  { id: 73, name: "钱币十", image: "images/cards/minor/pentacles/pentacles-10-Ten-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "财富", description: "家庭与传承。" }, reversed: { keywords: "损失", description: "家庭纷争。" } },
  { id: 74, name: "钱币侍从", image: "images/cards/minor/pentacles/pentacles-11-Page-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "学习", description: "机会与成长。" }, reversed: { keywords: "懒惰", description: "缺乏目标。" } },
  { id: 75, name: "钱币骑士", image: "images/cards/minor/pentacles/pentacles-12-Knight-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "勤奋", description: "踏实与可靠。" }, reversed: { keywords: "固执", description: "停滞与拖延。" } },
  { id: 76, name: "钱币皇后", image: "images/cards/minor/pentacles/pentacles-13-Queen-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "关爱", description: "实际与慷慨。" }, reversed: { keywords: "焦虑", description: "过度操心。" } },
  { id: 77, name: "钱币国王", image: "images/cards/minor/pentacles/pentacles-14-King-of-Pentacles.jpg", suit: "pentacles", upright: { keywords: "富有", description: "安全与成功。" }, reversed: { keywords: "贪婪", description: "保守与固执。" } }
];

// 导出
// export default tarotCards;