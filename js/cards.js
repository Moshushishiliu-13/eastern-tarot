// js/cards.js
// 塔罗牌数据

const tarotCards = [
  // 大阿卡纳牌
  {
    id: 0,
    name: "愚者",
    image: "images/cards/major/major-00-The-Fool.jpg",
    suit: "major",
    upright: {
      keywords: "新的开始，冒险，无忧无虑，纯真",
      description: "愚者代表一个新的开始，勇于冒险的精神和无拘无束的自我。面对未知的风险，代表着对未来的乐观态度和对新可能性的开放心态。"
    },
    reversed: {
      keywords: "鲁莽，冒失，风险，愚蠢",
      description: "逆位愚者暗示您可能做出轻率或不负责任的决定。可能表示恐惧阻止您接受新的机会，或您忽视了风险的重要性。"
    }
  },
  {
    id: 1,
    name: "魔术师",
    image: "images/cards/major/major-01-The-Magician.jpg",
    suit: "major",
    upright: {
      keywords: "创造力，技能，意志力，自信",
      description: "魔术师代表创造力、实现和将想法转化为现实的能力。他拥有所有必要的工具和资源，象征着主动性和自信心。"
    },
    reversed: {
      keywords: "技能滥用，未开发的才能，欺骗",
      description: "逆位魔术师可能表示您没有发挥自己的全部潜力，或者在某种程度上误用了自己的技能。也可以代表欺骗或操纵他人。"
    }
  },
  {
    id: 2,
    name: "女祭司",
    image: "images/cards/major/major-02-The-High-Priestess.jpg",
    suit: "major",
    upright: {
      keywords: "直觉，潜意识，神圣女性",
      description: "女祭司象征直觉和更高的知识。她鼓励您倾听内心的声音，重视梦境和直觉的想法，并探索更深层次的精神真相。"
    },
    reversed: {
      keywords: "秘密泄露，断开连接，表面知识",
      description: "逆位女祭司暗示内心声音被忽视或压抑。可能表示您正在关注表面事物而非深层含义，或是将重要信息隐藏起来。"
    }
  },
  {
    id: 3,
    name: "皇后",
    image: "images/cards/major/major-03-The-Empress.jpg",
    suit: "major",
    upright: {
      keywords: "丰饶，养育，母性，创造力",
      description: "皇后代表丰饶、成长和养育。她象征着母性能量，创造力和与自然的联系，以及物质世界中的舒适和美丽。"
    },
    reversed: {
      keywords: "依赖，过度保护，创造力阻塞",
      description: "逆位皇后可能表示过度保护或依赖，创造力受阻，或者在关系中存在不平衡。也可能指示自我照顾的需求。"
    }
  },
  {
    id: 4,
    name: "皇帝",
    image: "images/cards/major/major-04-The-Emperor.jpg",
    suit: "major",
    upright: {
      keywords: "权威，结构，领导力，父性",
      description: "皇帝代表权威、秩序和控制。他象征着结构化思维、领导能力和实现目标的决心，以及传统的父亲形象。"
    },
    reversed: {
      keywords: "专制，过度控制，刚性，不成熟",
      description: "逆位皇帝可能表示控制欲过强或僵化的思维模式。也可能代表缺乏纪律或面对责任时的不成熟。"
    }
  },
  {
    id: 5,
    name: "教皇",
    image: "images/cards/major/major-05-The-Hierophant.jpg",
    suit: "major",
    upright: {
      keywords: "传统，精神指导，符合常规，教育",
      description: "教皇代表传统、宗教和遵循既定规则。他象征着精神指导、教育和对更高目标的寻求，以及在团体或机构中找到自己的位置。"
    },
    reversed: {
      keywords: "挑战权威，非传统，个人信仰",
      description: "逆位教皇可能表示对传统或权威的挑战，或是寻找自己的精神道路。也可能指示不必要的反叛或拒绝社会规范。"
    }
  },
  // 添加更多大阿卡纳牌...
  
  // 圣杯牌示例
  {
    id: 22,
    name: "圣杯王牌",
    image: "images/cards/minor/cups/cups-01-Ace-of-Cups.jpg",
    suit: "cups",
    upright: {
      keywords: "爱的开始，情感，创造力，灵感",
      description: "圣杯王牌代表新的情感开始、爱、直觉和创造力的涌现。它预示着富有成效的关系、情感满足和创造性灵感的可能性。"
    },
    reversed: {
      keywords: "情感阻塞，爱的流失，创意匮乏",
      description: "逆位圣杯王牌可能表示情感受阻、创造力枯竭或对新关系的恐惧。也可能指示无法表达感受或情感上的不满足。"
    }
  },
  
  // 宝剑牌示例
  {
    id: 36,
    name: "宝剑王牌",
    image: "images/cards/minor/swords/swords-01-Ace-of-Swords.jpg",
    suit: "swords",
    upright: {
      keywords: "清晰，洞察，真相，突破性想法",
      description: "宝剑王牌代表思维的清晰、新的洞察力和突破性的想法。它预示着真相的揭示、困难局面的解决和精神上的突破。"
    },
    reversed: {
      keywords: "混乱，缺乏清晰，虚假真相",
      description: "逆位宝剑王牌可能表示思维混乱、错误的想法或缺乏方向感。也可能指示难以做出决定或面对现实。"
    }
  },
  
  // 权杖牌示例
  {
    id: 50,
    name: "权杖王牌",
    image: "images/cards/minor/wands/wands-01-Ace-of-Wands.jpg",
    suit: "wands",
    upright: {
      keywords: "创造力，灵感，新项目，成长",
      description: "权杖王牌代表新的开始、创造力的火花和充满潜力的新机会。它预示着灵感迸发、事业机会和精力充沛的行动。"
    },
    reversed: {
      keywords: "缺乏灵感，延误，创造力阻塞",
      description: "逆位权杖王牌可能表示创造力受阻、项目延迟或缺乏方向感。也可能指示错失机会或无法开始新的冒险。"
    }
  },
  
  // 钱币牌示例
  {
    id: 64,
    name: "钱币王牌",
    image: "images/cards/minor/pentacles/pentacles-01-Ace-of-Pentacles.jpg",
    suit: "pentacles",
    upright: {
      keywords: "物质机会，繁荣，新的财务开始",
      description: "钱币王牌代表物质世界的新机会、金钱繁荣和实际的成功。它预示着财务或职业上的新开始以及稳固的基础。"
    },
    reversed: {
      keywords: "错失机会，物质损失，不良投资",
      description: "逆位钱币王牌可能表示错失物质机会、财务决策不佳或资源浪费。也可能指示对物质事物过分关注。"
    }
  }
];

// 导出牌组数据供其他脚本使用
if (typeof module !== 'undefined') {
  module.exports = tarotCards;
}
