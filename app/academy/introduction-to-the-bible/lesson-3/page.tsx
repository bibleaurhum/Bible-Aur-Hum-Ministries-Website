
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Language = "en" | "ur";

type LessonSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const content: Record<
  Language,
  {
    title: string;
    subtitle: string;
    duration: string;
    backToCourse: string;
    learningObjectivesTitle: string;
    learningObjectives: string[];
    introductionTitle: string;
    introduction: string[];
    sections: LessonSection[];
    timelineTitle: string;
    timelineNote: string;
    imagesTitle: string;
    imagesNote: string;
    scriptureTitle: string;
    scriptureNote: string;
    scriptures: { reference: string; explanation: string }[];
    termsTitle: string;
    terms: { term: string; definition: string }[];
    keyPointsTitle: string;
    keyPoints: string[];
    quizTitle: string;
    quizDescription: string;
    submitQuiz: string;
    resetQuiz: string;
    answerRequired: string;
    scoreLabel: string;
    correctLabel: string;
    incorrectLabel: string;
    answerKeyTitle: string;
    reflectionTitle: string;
    reflectionDescription: string;
    reflections: string[];
    bibliographyTitle: string;
    bibliographyNote: string;
    imageCreditsTitle: string;
    imageCredits: string[];
    previousLesson: string;
    nextLesson: string;
    courseHome: string;
    footer: string;
    sectionsLabel: string;
  }
> = {
  en: {
    title: "Lesson 3: The Old Testament — Its Structure, Books, and Message",
    
    subtitle:
      "Explore the structure, books, historical background, and central message of the Old Testament, and discover its importance in the biblical story.",
    duration: "Estimated study time: 25–35 minutes",
    backToCourse: "Back to the Course",
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
  "Explain what the Old Testament is and describe its importance in the Christian Bible.",
  "Identify the three divisions of the Hebrew Bible: Torah, Nevi’im, and Ketuvim.",
  "Name the five books of the Torah and summarize their central themes.",
  "Describe the historical books, poetry and wisdom books, and prophetic books.",
  "Compare the Old Testament canons of Protestant, Catholic, and Orthodox traditions.",
  "Recognize the major historical periods of the Old Testament and explain its central message.",
],
    introductionTitle: "Introduction: Understanding the Old Testament",
    introduction: [
  "The Old Testament is the first major division of the Christian Bible and contains the sacred writings that form the foundation of the biblical story. It introduces us to God as Creator, the beginning of humanity, the history of Israel, God's covenants, His law, worship, wisdom, prophetic messages, judgment, and hope.",
  "In the Protestant Bible, the Old Testament contains 39 books arranged into four main groups: Law, History, Poetry and Wisdom, and Prophets. The Hebrew Bible, traditionally called the Tanakh, contains the same core collection arranged in three divisions: Torah, Nevi’im, and Ketuvim. These different arrangements help readers understand the structure and organization of the Scriptures.",
  "The Old Testament was written primarily in Hebrew, with some portions in Aramaic, and its books emerged across many centuries. Christians study it to understand God's relationship with humanity and Israel, the background of the New Testament, and the biblical themes that point toward Jesus Christ. Jewish tradition also treasures these Scriptures and interprets them within its own religious and historical understanding.",
],
    sectionsLabel: "Study Section",
    sections: [
  {
    title: "1. What Is the Old Testament?",
    paragraphs: [
      "The Old Testament is the first major division of the Christian Bible. It contains sacred writings that introduce God as Creator, describe the beginning of humanity, and tell the story of God's relationship with Israel. It includes history, law, worship, poetry, wisdom, prophecy, judgment, restoration, and hope.",
      "The Protestant Old Testament contains 39 books arranged into four main groups: Law, Historical Books, Poetry and Wisdom, and Prophets. The Hebrew Bible, traditionally called the Tanakh, contains the same core collection in 24 books, arranged into three divisions: Torah (Law), Nevi’im (Prophets), and Ketuvim (Writings). The difference in number is mainly due to the way certain books are grouped and counted.",
      "Most of the Old Testament was written in Hebrew, while some portions were written in Aramaic. Its books emerged and developed across many centuries. Christians study these Scriptures to understand God's purposes, the history of Israel, and the background of the New Testament. Jewish tradition also regards these writings as sacred and interprets them within its own religious understanding.",
      "The Old Testament remains essential for understanding the Bible as a whole. Jesus referred to the Law, the Prophets, and the Psalms (Luke 24:44), and Christian teaching reads these Scriptures as an important foundation for understanding the message of Jesus Christ."
    ],
    points: [
      "The Old Testament is the first major division of the Christian Bible.",
      "The Protestant Old Testament contains 39 books.",
      "The Hebrew Tanakh contains 24 books arranged in three divisions.",
      "The Old Testament was written primarily in Hebrew, with some Aramaic portions."
    ],
  },
      
      {
        title: "2. The Three-Part Structure of the Hebrew Bible",
        paragraphs: [
          "The Hebrew Bible is traditionally organized into three main sections known as the Tanakh. The word Tanakh is formed from the initial letters of the Hebrew names of these three divisions: Torah, Nevi’im, and Ketuvim. Together, these writings form the sacred Scriptures of Judaism.",
          "The first section is the Torah, also known as the Law or the Five Books of Moses. It contains Genesis, Exodus, Leviticus, Numbers, and Deuteronomy. These books describe creation, the ancestors of Israel, the Exodus from Egypt, the covenant at Sinai, and the laws and teachings given to Israel.",
          "The second section is the Nevi’im, meaning Prophets. It includes the Former Prophets: Joshua, Judges, Samuel, and Kings; and the Latter Prophets: Isaiah, Jeremiah, Ezekiel, and the Twelve Minor Prophets. These writings describe Israel’s history and communicate prophetic messages about faithfulness, justice, judgment, repentance, and hope.",
          "The third section is the Ketuvim, meaning Writings. It includes books such as Psalms, Proverbs, Job, Ruth, Song of Songs, Ecclesiastes, Lamentations, Esther, Daniel, Ezra-Nehemiah, and Chronicles. These writings contain poetry, wisdom, prayers, stories, and reflections on faith and life.",
          "Luke 24:44 records Jesus referring to the Law of Moses, the Prophets, and the Psalms. This wording reflects an ancient way of referring to the Scriptures through their major divisions. Other passages, such as Matthew 5:17 and Joshua 1:8, also show the importance of the Law and the Scriptures in biblical faith.",
          "The Hebrew Bible is traditionally counted as 24 books, while the Protestant Old Testament contains 39 books. The difference is mainly due to the way certain books are grouped and counted. For example, books that are counted separately in Protestant Bibles may be combined into single books in the Jewish arrangement."
        ],
        points: [
          "Tanakh is the traditional name for the Hebrew Bible.",
          "Torah means Law and contains the first five books.",
          "Nevi’im means Prophets and includes the Former and Latter Prophets.",
          "Ketuvim means Writings and includes poetry, wisdom, and other sacred books.",
          "The Tanakh has 24 books, while the Protestant Old Testament has 39 because of differences in grouping and counting."
        ],
      },

     
     
      
      {
        title: "5. The Books of Poetry and Wisdom",
        paragraphs: [
          "The Old Testament includes books of poetry and wisdom that explore human experience, faith, suffering, joy, love, prayer, and the search for wisdom. In the Protestant arrangement, five books are commonly grouped as Poetry and Wisdom: Job, Psalms, Proverbs, Ecclesiastes, and Song of Songs. Lamentations is also poetic in form, but it is usually placed among the Prophets in the Protestant arrangement.",
          "The book of Job explores suffering, faith, and the limits of human understanding. Job experiences deep loss and asks difficult questions about justice and suffering. The book challenges the assumption that every person's suffering is the direct result of a particular personal sin. It invites readers to consider God's wisdom, even when human understanding is limited.",
          "Psalms contains 150 prayers, songs, and poems used in worship and personal devotion. These writings express praise, thanksgiving, fear, repentance, grief, trust, and hope. The Psalms show that people can honestly bring every part of life before God in prayer.",
          "Proverbs offers practical wisdom for everyday life. It teaches about honesty, discipline, hard work, self-control, justice, relationships, and careful speech. A central theme is that the fear of the Lord is the beginning of knowledge and wisdom.",
          "Ecclesiastes reflects on the limits of human achievement, wealth, pleasure, and work. It asks searching questions about the meaning of life and reminds readers that earthly accomplishments cannot provide lasting fulfillment apart from a proper relationship with God. Its conclusion calls people to fear God and keep His commandments.",
          "Song of Songs is a collection of love poetry celebrating beauty, affection, desire, and commitment. Jewish and Christian interpreters have understood the book in different ways, including as a celebration of human love and, in some traditions, as an image of the relationship between God and His people.",
          "Lamentations consists of five poetic chapters expressing grief over the destruction of Jerusalem by the Babylonians in 587/586 BC. The book honestly describes suffering and loss while also expressing hope in God's mercy, compassion, and faithfulness."
        ],
        points: [
          "Job, Psalms, Proverbs, Ecclesiastes, and Song of Songs are the five books commonly grouped as Poetry and Wisdom.",
          "Job explores suffering, faith, justice, and the limits of human understanding.",
          "Psalms contains prayers and songs expressing a wide range of human emotions.",
          "Proverbs teaches practical wisdom and the importance of fearing the Lord.",
          "Ecclesiastes reflects on life's meaning and the limits of earthly achievements.",
          "Song of Songs celebrates love through poetry.",
          "Lamentations expresses grief over Jerusalem's destruction while holding on to hope in God's mercy."
        ],
      },

     
      
     
      
      {
        title: "9. The Central Message and Importance of the Old Testament",
        paragraphs: [
          "The Old Testament presents God as the Creator and Sustainer of all things. It begins with the creation of the world and describes humanity's relationship with God, the entrance of sin, and the continuing story of God's dealings with people. Throughout its books, God is portrayed as holy, just, merciful, faithful, and worthy of worship.",
          "A central theme is God's covenant relationship with His people. God called Abraham and promised to bless him and make his descendants a great nation. Through Moses, Israel received the Law and was called to live as a holy people. The history of Israel shows both human failure and God's continuing faithfulness to His promises.",
          "The Old Testament teaches that genuine faith should be reflected in obedience, justice, mercy, and love. The prophets repeatedly challenged idolatry, dishonesty, oppression, and empty religious practices. They reminded the people that God desires sincere worship and righteous living, not merely outward ceremonies.",
          "The books of the Old Testament also explore the human experience through history, poetry, wisdom, prayer, suffering, and prophecy. They teach readers to seek wisdom, trust God in difficult circumstances, confess wrongdoing, care for others, and remain hopeful even during times of judgment and suffering.",
          "Hope and restoration are important themes throughout these Scriptures. The prophets speak of God's mercy, the renewal of His people, a transformed heart, and a future characterized by peace and righteousness. These promises gave hope to people facing exile, hardship, and uncertainty.",
          "Christians read the Old Testament as an essential part of the Bible and understand its story, covenants, promises, sacrifices, and prophetic passages in relation to Jesus Christ. The New Testament presents Jesus as fulfilling God's saving purposes. Jewish tradition, however, reads these Scriptures within its own covenantal and interpretive framework and does not share the Christian identification of Jesus as the Messiah.",
          "The Old Testament remains important for readers today because it provides the foundation for understanding biblical history, the teachings of Jesus, the language of the New Testament, and major themes of Christian faith. Studying it carefully helps readers understand God's character, human responsibility, the seriousness of sin, and the hope of redemption."
        ],
        points: [
          "The Old Testament presents God as Creator, holy, just, merciful, and faithful.",
          "God's covenant with Abraham and Israel is a central theme throughout its history.",
          "True faith is reflected in obedience, justice, mercy, and sincere worship.",
          "The books explore wisdom, suffering, prayer, history, judgment, and hope.",
          "The prophets speak of restoration, renewed hearts, peace, and righteousness.",
          "Christians understand the Old Testament in relation to Jesus Christ, while Jewish tradition interprets these Scriptures differently.",
          "The Old Testament provides an essential foundation for understanding the Bible and Christian faith."
        ],
      },

    ],
   imagesTitle: "The Old Testament: Structure and Books",
    imagesNote:
  "These images introduce the structure of the Hebrew Bible, the Torah scroll, and the five books of the Law.",
    timelineTitle: "The Old Testament: Historical Timeline",
    timelineNote:
  "Dates are approximate and some events remain debated by historians. This timeline highlights major periods in the history of ancient Israel, from the patriarchs to the Roman period.",
    scriptureTitle: "Key Old Testament Bible Passages",
    scriptureNote:
  "Read each passage in its literary and historical context. These references highlight the Old Testament's structure, history, wisdom, prophecy, covenant, and central message.",
    
    scriptures: [
      {
        reference: "Genesis 1:1",
        explanation:
          "The Old Testament begins by declaring God as the Creator of heaven and earth.",
      },
      {
        reference: "Genesis 12:1–3",
        explanation:
          "God calls Abraham and promises to bless all families of the earth through him.",
      },
      {
        reference: "Exodus 20:1–17",
        explanation:
          "The Ten Commandments express important principles of God's covenant and moral instruction for Israel.",
      },
      {
        reference: "Deuteronomy 6:4–9",
        explanation:
          "The Shema calls Israel to love the Lord wholeheartedly and teach His commandments to future generations.",
      },
      {
        reference: "Joshua 1:8",
        explanation:
          "Joshua is instructed to meditate on the Book of the Law and live according to its teaching.",
      },
      {
        reference: "Psalm 23:1–6",
        explanation:
          "David's psalm expresses trust in God as the shepherd who guides, protects, and provides.",
      },
      {
        reference: "Proverbs 1:7",
        explanation:
          "The fear of the Lord is presented as the beginning of knowledge.",
      },
      {
        reference: "Isaiah 53:3–6",
        explanation:
          "Christians interpret this passage about the suffering servant in relation to Jesus Christ.",
      },
      {
        reference: "Micah 6:8",
        explanation:
          "God calls His people to act justly, love mercy, and walk humbly with Him.",
      },
      {
        reference: "Luke 24:27, 44",
        explanation:
          "Jesus refers to the Scriptures and explains how they relate to His mission and the biblical story.",
      },
    ],

    termsTitle: "Key Old Testament Terms",
    terms: [
      {
        term: "Old Testament",
        definition:
          "The first major division of the Christian Bible, containing sacred Scriptures shared with the Jewish biblical tradition.",
      },
      {
        term: "Tanakh",
        definition:
          "The traditional Jewish name for the Hebrew Bible, formed from Torah, Nevi’im, and Ketuvim.",
      },
      {
        term: "Torah",
        definition:
          "The first five books of the Hebrew Bible: Genesis, Exodus, Leviticus, Numbers, and Deuteronomy.",
      },
      {
        term: "Nevi’im",
        definition:
          "The Prophets, the second major division of the Hebrew Bible.",
      },
      {
        term: "Ketuvim",
        definition:
          "The Writings, the third major division of the Hebrew Bible.",
      },
      {
        term: "Pentateuch",
        definition:
          "A term meaning five books, commonly used for the first five books of the Bible.",
      },
      {
        term: "Deuterocanonical Books",
        definition:
          "Books included in the Old Testament canon of the Catholic Church but not in the Protestant canon.",
      },
      {
        term: "Septuagint",
        definition:
          "The ancient Greek translation of Jewish Scriptures, produced over several generations.",
      },
      {
        term: "Prophet",
        definition:
          "A person called to communicate God's message, often addressing faithfulness, justice, repentance, and hope.",
      },
      {
        term: "Covenant",
        definition:
          "A solemn relationship or agreement established by God with people, carrying promises and responsibilities.",
      },
    ],

    keyPointsTitle: "Key Points to Remember",
    
    keyPoints: [
      "The Old Testament is the first major division of the Christian Bible.",
      "The Protestant Old Testament contains 39 books.",
      "The Hebrew Tanakh contains 24 books arranged into Torah, Nevi’im, and Ketuvim.",
      "The Torah consists of Genesis, Exodus, Leviticus, Numbers, and Deuteronomy.",
      "The Old Testament includes historical, poetic, wisdom, and prophetic writings.",
      "Major and Minor Prophets are categories based mainly on the length of their books, not their importance.",
      "Protestant, Catholic, and Orthodox traditions have differences in their Old Testament canons.",
      "The history of ancient Israel includes the monarchy, divided kingdom, exile, and return.",
      "Justice, mercy, covenant, worship, wisdom, and hope are central Old Testament themes.",
      "Christians read the Old Testament in relation to Jesus Christ, while Jewish tradition interprets these Scriptures within its own framework.",
    ],

    quizTitle: "Knowledge Check: Lesson 3",
    quizDescription:
      "Choose one answer for each question. Complete all ten questions to see your score and explanations.",
    submitQuiz: "Submit Answers",
    resetQuiz: "Try Again",
    answerRequired: "Please answer all ten questions before submitting.",
    scoreLabel: "Your Score",
    correctLabel: "Correct",
    incorrectLabel: "Incorrect",
    answerKeyTitle: "Answer Explanations",
    reflectionTitle: "Reflection and Discussion",
    reflectionDescription:
      "Use these questions for personal study, classroom discussion, or written reflection.",
        reflections: [
      "Why is the Old Testament important for understanding the complete story of the Bible?",
      "What are the main differences between the Hebrew Tanakh and the Protestant Old Testament?",
      "How do the Law, Historical Books, Wisdom Literature, and Prophets contribute to our understanding of God's message?",
      "What can we learn from the history of ancient Israel about faithfulness, obedience, repentance, and God's covenant?",
      "How do Christians understand the relationship between the Old Testament and Jesus Christ?",
    ],
    bibliographyTitle: "Recommended Academic Bibliography",
bibliographyNote:
  "These resources provide further academic reading on the Old Testament, the Hebrew Bible, its historical background, literature, and theological themes.",
    imageCreditsTitle: "Old Testament Image Credits and Acknowledgements",
       imageCredits: [
      "Five Books of Torah: Educational illustration showing Genesis, Exodus, Leviticus, Numbers, and Deuteronomy.",
      "Hebrew Bible Structure: Educational illustration showing Torah, Nevi’im, and Ketuvim.",
      "Torah Scroll: Educational illustration of a traditional Torah scroll.",
    ],
    previousLesson: "Previous Lesson",
    nextLesson: "Next Lesson",
    courseHome: "Course Home",
    footer:
      "Bible Aur Hum Academy | Certificate in Biblical Studies",
  },
  ur: {
    title: "سبق ۳: عہدِ عتیق",
subtitle:
  "عہدِ عتیق کی ساخت، کتابوں، تاریخی پس منظر اور بنیادی پیغام کا مطالعہ کریں اور بائبل کی کہانی میں اس کی اہمیت کو جانیں۔",
    duration: "متوقع مطالعے کا وقت: ۲۵ تا ۳۵ منٹ",
    backToCourse: "کورس پر واپس جائیں",
    learningObjectivesTitle: "تعلیمی مقاصد",
    learningObjectives: [
  "یہ وضاحت کرنا کہ عہدِ عتیق کیا ہے اور مسیحی بائبل میں اس کی کیا اہمیت ہے۔",
  "عبرانی بائبل کے تین حصوں تورات، نبیئیم اور کتوویم کی شناخت کرنا۔",
  "تورات کی پانچ کتابوں کے نام اور ان کے بنیادی موضوعات بیان کرنا۔",
  "تاریخی کتابوں، شاعری و حکمت کی کتابوں اور انبیاء کی کتابوں کا تعارف پیش کرنا۔",
  "پروٹسٹنٹ، کیتھولک اور آرتھوڈوکس روایات میں عہدِ عتیق کے صحیفوں کے مجموعوں کا تقابل کرنا۔",
  "عہدِ عتیق کے اہم تاریخی ادوار کو پہچاننا اور اس کے مرکزی پیغام کی وضاحت کرنا۔",
],
    introductionTitle: "تعارف: عہدِ عتیق کو سمجھنا",
    introduction: [
  "عہدِ عتیق مسیحی بائبل کا پہلا بڑا حصہ ہے اور اس میں وہ مقدس صحائف شامل ہیں جو بائبلی کہانی کی بنیاد فراہم کرتے ہیں۔ یہ ہمیں خدا کو خالق کے طور پر، انسانیت کے آغاز، اسرائیل کی تاریخ، خدا کے عہود، شریعت، عبادت، حکمت، انبیاء کے پیغامات، عدالت اور امید کے بارے میں تعلیم دیتا ہے۔",
  "پروٹسٹنٹ بائبل میں عہدِ عتیق کی 39 کتابیں ہیں جو چار بنیادی حصوں میں تقسیم ہیں: شریعت، تاریخی کتابیں، شاعری و حکمت، اور انبیاء۔ عبرانی بائبل، جسے روایتی طور پر تنخ کہا جاتا ہے، اسی بنیادی مجموعے کو تین حصوں میں ترتیب دیتی ہے: تورات، نبیئیم اور کتوویم۔ یہ مختلف ترتیبیں ہمیں مقدس صحائف کی ساخت اور تنظیم کو سمجھنے میں مدد دیتی ہیں۔",
  "عہدِ عتیق بنیادی طور پر عبرانی زبان میں لکھا گیا، جبکہ اس کے بعض حصے آرامی زبان میں ہیں۔ اس کی کتابیں کئی صدیوں کے دوران وجود میں آئیں۔ مسیحی اس کا مطالعہ انسانیت اور اسرائیل کے ساتھ خدا کے تعلق، عہدِ جدید کے پس منظر اور ان بائبلی موضوعات کو سمجھنے کے لیے کرتے ہیں جو یسوع مسیح کی طرف اشارہ کرتے ہیں۔ یہودی روایت بھی ان صحائف کو مقدس مانتی ہے اور اپنی مذہبی اور تاریخی سمجھ کے مطابق ان کی تشریح کرتی ہے۔",
],
    sections: [
  {
    title: "۱۔ عہدِ عتیق کیا ہے؟",
    paragraphs: [
      "عہدِ عتیق مسیحی بائبل کا پہلا بڑا حصہ ہے۔ اس میں وہ مقدس تحریریں شامل ہیں جو خدا کو خالق کے طور پر ظاہر کرتی ہیں، انسانیت کے آغاز کا بیان کرتی ہیں اور اسرائیل کے ساتھ خدا کے تعلق کی تاریخ پیش کرتی ہیں۔ اس میں تاریخ، شریعت، عبادت، شاعری، حکمت، نبوت، عدالت، بحالی اور امید کے موضوعات شامل ہیں۔",
      "پروٹسٹنٹ عہدِ عتیق میں ۳۹ کتابیں ہیں، جنہیں چار بڑے حصوں میں تقسیم کیا جاتا ہے: شریعت، تاریخی کتابیں، شاعری اور حکمت، اور انبیاء۔ عبرانی بائبل کو یہودی روایت میں تنخ کہا جاتا ہے۔ اس میں یہی بنیادی صحائف ۲۴ کتابوں کی صورت میں تین حصوں میں ترتیب دیے گئے ہیں: تورات، نبیئیم (انبیاء) اور کتوبیم (تحریریں)۔ کتابوں کی تعداد میں فرق بنیادی طور پر ان کی گروہ بندی اور گنتی کے طریقے کی وجہ سے ہے۔",
      "عہدِ عتیق کا زیادہ تر حصہ عبرانی زبان میں لکھا گیا، جبکہ اس کے کچھ حصے ارامی زبان میں ہیں۔ اس کی کتابیں کئی صدیوں کے دوران وجود میں آئیں اور اپنی موجودہ صورت تک پہنچیں۔ مسیحی ان صحائف کا مطالعہ خدا کے مقاصد، اسرائیل کی تاریخ اور عہدِ جدید کے پس منظر کو سمجھنے کے لیے کرتے ہیں۔ یہودی روایت بھی ان تحریروں کو مقدس مانتی ہے اور انہیں اپنی مذہبی تفہیم کے مطابق سمجھتی ہے۔",
      "پوری بائبل کو سمجھنے کے لیے عہدِ عتیق کا مطالعہ نہایت اہم ہے۔ یسوع مسیح نے شریعت، انبیاء اور زبور کا ذکر کیا (لوقا ۲۴:۴۴)، اور مسیحی تعلیم ان صحائف کو یسوع مسیح کے پیغام کو سمجھنے کی ایک اہم بنیاد قرار دیتی ہے۔"
    ],
    points: [
      "عہدِ عتیق مسیحی بائبل کا پہلا بڑا حصہ ہے۔",
      "پروٹسٹنٹ عہدِ عتیق میں ۳۹ کتابیں شامل ہیں۔",
      "عبرانی تنخ میں ۲۴ کتابیں تین حصوں میں ترتیب دی گئی ہیں۔",
      "عہدِ عتیق بنیادی طور پر عبرانی اور جزوی طور پر ارامی زبان میں لکھا گیا۔"
    ],
  },
      {
             
        title: "۲۔ عبرانی بائبل کی تین حصوں پر مشتمل ترتیب",
        paragraphs: [
          "یہودی روایت میں عبرانی بائبل کو تنخ کہا جاتا ہے۔ یہ نام اس کے تین بنیادی حصوں کے عبرانی ناموں کے ابتدائی حروف سے مل کر بنا ہے: تورات، نبیئیم اور کتوبیم۔ یہ ترتیب یہودی صحائف کی روایتی ساخت کو ظاہر کرتی ہے۔",
          "پہلا حصہ تورات ہے، جس میں پانچ کتابیں شامل ہیں: پیدائش، خروج، احبار، گنتی اور استثنا۔ یہ کتابیں تخلیق، اسرائیل کے بزرگوں، مصر سے رہائی، خدا کے عہد اور شریعت کی تعلیمات بیان کرتی ہیں۔",
          "دوسرا حصہ نبیئیم یعنی انبیاء کی کتابیں ہیں۔ اس میں سابقہ انبیاء، جن میں یشوع، قضاۃ، سموئیل اور سلاطین شامل ہیں، اور آخری انبیاء، یعنی یسعیاہ، یرمیاہ، حزقی ایل اور بارہ چھوٹے انبیاء شامل ہیں۔ یہ کتابیں اسرائیل کی تاریخ، خدا کے پیغام، توبہ، انصاف اور امید پر زور دیتی ہیں۔",
          "تیسرا حصہ کتوبیم یعنی تحریریں ہیں۔ اس میں زبور، امثال، ایوب، روت، غزل الغزلات، واعظ، نوحہ، آستر، دانی ایل، عزرا، نحمیاہ اور تواریخ شامل ہیں۔ ان کتابوں میں عبادت، حکمت، دعا، دکھ، وفاداری اور خدا پر بھروسے کے موضوعات ملتے ہیں۔",
          "عہدِ جدید میں لوقا ۲۴:۴۴ میں یسوع مسیح شریعتِ موسیٰ، انبیاء اور زبور کا ذکر کرتے ہیں۔ یہ الفاظ عبرانی صحائف کی تین حصوں والی روایتی ترتیب کی طرف اشارہ کرتے ہیں۔ تنخ کی ۲۴ کتابیں اور پروٹسٹنٹ عہدِ عتیق کی ۳۹ کتابیں بنیادی طور پر ایک ہی صحائف کے مجموعے کو مختلف انداز سے تقسیم اور شمار کرتی ہیں۔"
        ],
        points: [
          "تنخ تین حصوں کے ناموں سے بنا ہے: تورات، نبیئیم اور کتوبیم۔",
          "تورات میں پانچ کتابیں شامل ہیں۔",
          "نبیئیم میں سابقہ اور آخری انبیاء کی کتابیں شامل ہیں۔",
          "کتوبیم میں زبور، حکمت، شاعری اور دیگر تحریریں شامل ہیں۔",
          "تنخ کی ۲۴ اور پروٹسٹنٹ عہدِ عتیق کی ۳۹ کتابوں میں بنیادی صحائف کا مجموعہ مشترک ہے۔"
        ],
      },
      {
              
        title: "۳۔ شریعت کی پانچ کتابیں (تورات)",
        paragraphs: [
          "تورات عبرانی بائبل کا پہلا حصہ ہے اور اس میں پانچ کتابیں شامل ہیں: پیدائش، خروج، احبار، گنتی اور استثنا۔ ان پانچ کتابوں کو یونانی اصطلاح پینٹاٹیوک بھی کہا جاتا ہے، جس کا مطلب پانچ کتابیں ہیں۔ یہ کتابیں تخلیق، انسانیت کے آغاز، اسرائیل کے بزرگوں، مصر سے رہائی، خدا کے عہد اور شریعت کی تعلیمات بیان کرتی ہیں۔",
          "یہودی اور مسیحی روایات ان کتابوں کو موسیٰ سے خاص طور پر منسوب کرتی ہیں۔ جدید علمی تحقیق ان کتابوں کی تشکیل، تدوین اور موجودہ صورت کی تاریخ کا بھی مطالعہ کرتی ہے۔ محققین اس بات پر گفتگو کرتے ہیں کہ ان میں مختلف قدیم روایات اور تحریری مواد کس طرح جمع اور مرتب ہوئے۔ اس علمی مطالعے کا مقصد ان کتابوں کی مذہبی اہمیت کو نظرانداز کرنا نہیں بلکہ ان کی تاریخی تشکیل کو سمجھنا ہے۔",
          "پیدائش کی کتاب کائنات اور انسان کی تخلیق، انسان کے گناہ میں گرنے، نوح کے واقعے اور ابراہیم، اسحاق، یعقوب اور یوسف کی زندگیوں کا بیان کرتی ہے۔ اس میں خدا کے وعدے اور ابراہیم کے ساتھ عہد خاص اہمیت رکھتے ہیں۔",
          "خروج کی کتاب اسرائیلیوں کی مصر کی غلامی سے رہائی، فسح، بحیرۂ قلزم کے واقعے اور کوہِ سینا پر خدا کے عہد کو بیان کرتی ہے۔ اس میں دس احکام اور خیمۂ اجتماع کی ہدایات بھی شامل ہیں۔",
          "احبار کی کتاب عبادت، قربانیوں، کاہنوں کی ذمہ داریوں اور پاکیزگی کے اصولوں پر زور دیتی ہے۔ اس کا مرکزی پیغام خدا کی پاکیزگی اور اس کے لوگوں کی مقدس زندگی سے تعلق رکھتا ہے۔",
          "گنتی کی کتاب بیابان میں اسرائیل کے سفر، قوم کی نافرمانی، مشکلات اور خدا کی وفاداری کا بیان کرتی ہے۔ اس میں ایمان، اطاعت اور خدا کے وعدوں پر بھروسے کے اسباق ملتے ہیں۔",
          "استثنا کی کتاب میں موسیٰ کے آخری خطابات اور اسرائیل کے ساتھ عہد کی تجدید بیان ہوئی ہے۔ اس میں خدا سے محبت، اس کے احکام پر عمل اور زندگی میں وفاداری کی دعوت دی گئی ہے۔"
        ],
        points: [
          "تورات میں پانچ کتابیں شامل ہیں: پیدائش، خروج، احبار، گنتی اور استثنا۔",
          "پینٹاٹیوک کا مطلب پانچ کتابیں ہے۔",
          "پیدائش تخلیق، انسانیت اور بزرگوں کی تاریخ بیان کرتی ہے۔",
          "خروج مصر سے رہائی اور کوہِ سینا کے عہد پر زور دیتی ہے۔",
          "احبار پاکیزگی اور عبادت، گنتی بیابان کے سفر، اور استثنا عہد کی تجدید پر توجہ دیتی ہے۔"
        ],
      },
      {
             
        title: "۴۔ تاریخی کتابیں",
        paragraphs: [
          "پروٹسٹنٹ عہدِ عتیق میں تاریخی کتابوں کے گروہ میں بارہ کتابیں شامل ہیں: یشوع، قضاۃ، روت، ۱ اور ۲ سموئیل، ۱ اور ۲ سلاطین، ۱ اور ۲ تواریخ، عزرا، نحمیاہ اور آستر۔ یہ کتابیں اسرائیل کی تاریخ کو مختلف ادوار اور زاویوں سے بیان کرتی ہیں۔",
          "یشوع کی کتاب وعدہ کیے ہوئے ملک میں اسرائیلیوں کے داخلے اور زمین کی تقسیم کا بیان کرتی ہے۔ قضاۃ کی کتاب میں اسرائیل کے ان ادوار کا ذکر ہے جب قوم بار بار خدا سے دور ہوئی، مشکلات میں گرفتار ہوئی اور پھر خدا نے رہائی کے لیے قاضیوں کو برپا کیا۔ روت کی مختصر کتاب وفاداری، محبت اور خدا کی پوشیدہ رہنمائی کو نمایاں کرتی ہے۔",
          "سموئیل اور سلاطین کی کتابیں اسرائیل میں بادشاہت کے آغاز، ساؤل، داؤد اور سلیمان کے ادوار، اور بعد میں سلطنت کی تقسیم کی تاریخ بیان کرتی ہیں۔ ان میں شمالی سلطنت اسرائیل اور جنوبی سلطنت یہوداہ کے بادشاہوں کے اعمال اور خدا کے ساتھ ان کی وفاداری یا نافرمانی کا جائزہ لیا گیا ہے۔",
          "تواریخ کی کتابیں اسرائیل کی تاریخ کو ایک خاص الٰہیاتی زاویے سے دوبارہ بیان کرتی ہیں۔ ان میں داؤد کی نسل، ہیکل، عبادت اور خدا کے ساتھ عہد کی اہمیت پر زور دیا گیا ہے۔ عزرا اور نحمیاہ کی کتابیں بابل کی اسیری کے بعد واپسی، ہیکل کی تعمیرِ نو، یروشلیم کی فصیل اور مذہبی زندگی کی بحالی کا ذکر کرتی ہیں۔ آستر کی کتاب جلاوطنی کے دور میں یہودی قوم کی حفاظت کی ایک اہم داستان پیش کرتی ہے۔",
          "یہ تاریخی کتابیں صرف بادشاہوں اور جنگوں کا ریکارڈ نہیں ہیں۔ یہ خدا کے عہد، انصاف، اطاعت، نافرمانی، توبہ اور رحم کے موضوعات پر غور کرنے کی دعوت دیتی ہیں۔ ان میں اسرائیل کی کامیابیوں کے ساتھ اس کی ناکامیوں کو بھی واضح طور پر بیان کیا گیا ہے۔",
          "اسرائیل کی تاریخ میں آشوری سلطنت نے ۷۲۲ قبل مسیح میں سامریہ پر قبضہ کیا، جبکہ بابلی سلطنت نے ۵۸۷/۵۸۶ قبل مسیح میں یروشلیم اور پہلی ہیکل کو تباہ کیا۔ ان واقعات نے اسرائیل اور یہوداہ کی تاریخ پر گہرے اثرات مرتب کیے۔"
        ],
        points: [
          "پروٹسٹنٹ عہدِ عتیق میں تاریخی کتابوں کے گروہ میں بارہ کتابیں شامل ہیں۔",
          "یشوع اور قضاۃ اسرائیل کے ابتدائی قومی دور کے واقعات بیان کرتی ہیں۔",
          "سموئیل اور سلاطین بادشاہت اور تقسیم شدہ سلطنت کی تاریخ پیش کرتی ہیں۔",
          "عزرا اور نحمیاہ اسیری کے بعد واپسی اور بحالی کا ذکر کرتی ہیں۔",
          "تاریخی کتابیں خدا کے عہد، انصاف، اطاعت اور رحم کے موضوعات سکھاتی ہیں۔"
        ],
      },
      {
        title: "۵۔ شاعری اور حکمت کی کتابیں",
        paragraphs: [
          "عہدِ عتیق میں شاعری اور حکمت کی کتابیں انسانی زندگی کے گہرے تجربات، ایمان، دکھ، خوشی، محبت، دعا اور خدا کی حکمت پر غور کرنے میں ہماری مدد کرتی ہیں۔ پروٹسٹنٹ بائبل میں عموماً پانچ کتابیں اس گروہ میں شامل کی جاتی ہیں: ایوب، زبور، امثال، واعظ اور غزل الغزلات۔ نوحہ بھی شاعرانہ انداز میں لکھی گئی کتاب ہے، لیکن پروٹسٹنٹ ترتیب میں اسے عموماً انبیاء کے حصے میں رکھا جاتا ہے۔",
          "ایوب کی کتاب دکھ اور مصیبت کے مسئلے پر غور کرتی ہے۔ یہ ہمیں سکھاتی ہے کہ ہر مصیبت کو کسی خاص ذاتی گناہ کا نتیجہ قرار دینا درست نہیں۔ ایوب اپنے دکھ میں خدا سے سوال کرتا ہے، مگر آخرکار خدا کی حکمت اور انسان کی محدود سمجھ کو تسلیم کرتا ہے۔",
          "زبور کی کتاب میں ۱۵۰ دعائیں، حمدیہ گیت اور شاعرانہ کلام شامل ہیں۔ ان میں خوشی، شکرگزاری، خوف، توبہ، غم اور امید کے جذبات ملتے ہیں۔ زبور ہمیں سکھاتا ہے کہ انسان اپنی زندگی کے ہر حال میں خدا کے حضور سچائی کے ساتھ دعا کر سکتا ہے۔",
          "امثال کی کتاب روزمرہ زندگی کے لیے حکمت اور عملی رہنمائی فراہم کرتی ہے۔ یہ سچائی، محنت، ضبطِ نفس، انصاف، درست گفتگو اور خداوند کے خوف کی اہمیت بیان کرتی ہے۔ اس کتاب کے مطابق حکمت کی بنیاد خداوند کا خوف ہے۔",
          "واعظ کی کتاب انسانی زندگی، دولت، کامیابی اور دنیاوی محنت کی حدود پر غور کرتی ہے۔ یہ واضح کرتی ہے کہ خدا کے بغیر دنیاوی کامیابیاں انسان کو مکمل اطمینان نہیں دے سکتیں۔ کتاب کا اختتام خدا سے ڈرنے اور اس کے احکام پر عمل کرنے کی تاکید سے ہوتا ہے۔",
          "غزل الغزلات محبت اور ازدواجی تعلق کی خوبصورتی کو شاعرانہ انداز میں بیان کرتی ہے۔ یہودی اور مسیحی مفسرین نے اس کتاب کی مختلف تشریحات پیش کی ہیں، جن میں انسانی محبت اور خدا کے ساتھ تعلق کی علامتی تفہیم بھی شامل ہے۔",
          "نوحہ یروشلیم کی تباہی کے بعد قوم کے غم اور ماتم کو بیان کرتی ہے۔ اس کا تاریخی پس منظر بابلیوں کے ہاتھوں یروشلیم اور پہلی ہیکل کی تباہی، تقریباً ۵۸۷/۵۸۶ قبل مسیح، سے تعلق رکھتا ہے۔ شدید دکھ کے باوجود یہ کتاب خدا کی رحمت اور وفاداری میں امید ظاہر کرتی ہے۔"
        ],
        points: [
          "ایوب، زبور، امثال، واعظ اور غزل الغزلات شاعری اور حکمت کی پانچ معروف کتابیں ہیں۔",
          "ایوب کی کتاب دکھ، ایمان اور خدا کی حکمت پر غور کرتی ہے۔",
          "زبور میں دعا، حمد، توبہ اور امید کے گیت شامل ہیں۔",
          "امثال روزمرہ زندگی کے لیے حکمت اور عملی رہنمائی دیتی ہے۔",
          "واعظ زندگی کی حدود اور خدا کے احکام کی اہمیت بیان کرتی ہے۔",
          "نوحہ یروشلیم کی تباہی کے غم کے ساتھ خدا کی رحمت میں امید بھی پیش کرتی ہے۔"
        ],
      },
      {
        
        title: "۶۔ بڑے اور چھوٹے انبیاء کی کتابیں",
        paragraphs: [
          "عہدِ عتیق کے انبیاء کی کتابیں خدا کے پیغام، قوم کی روحانی حالت، انصاف، توبہ، عدالت اور بحالی کی امید کو بیان کرتی ہیں۔ خدا نے انبیاء کو اس لیے بھیجا کہ وہ لوگوں کو گناہ سے باز آنے، خدا کے عہد کی طرف لوٹنے اور راستبازی کے ساتھ زندگی گزارنے کی دعوت دیں۔",
          "پروٹسٹنٹ عہدِ عتیق کی ترتیب میں بڑے انبیاء کی کتابوں میں یسعیاہ، یرمیاہ، نوحہ، حزقی ایل اور دانی ایل شامل ہیں۔ انہیں بڑے انبیاء اس لیے کہا جاتا ہے کہ ان کی کتابیں عموماً نسبتاً طویل ہیں، نہ کہ اس لیے کہ وہ چھوٹے انبیاء سے زیادہ اہم ہیں۔",
          "یسعیاہ کی کتاب میں خدا کی پاکیزگی، گناہ کے خلاف عدالت، قوم کی بحالی اور آنے والی نجات کی امید نمایاں ہے۔ یرمیاہ نے یہوداہ کو توبہ کی دعوت دی اور یروشلیم کی آنے والی تباہی سے خبردار کیا۔ نوحہ یروشلیم کی تباہی کے غم کے ساتھ خدا کی رحمت میں امید ظاہر کرتی ہے۔",
          "حزقی ایل کی کتاب میں جلاوطنی کے دوران خدا کی عدالت، نئی روح، نئے دل اور بحالی کا پیغام ملتا ہے۔ دانی ایل کی کتاب میں وفاداری، خدا کی بادشاہی اور قوموں کے عروج و زوال کے باوجود خدا کی حاکمیت پر زور دیا گیا ہے۔",
          "چھوٹے انبیاء کی بارہ کتابیں یہ ہیں: ہوسیع، یوایل، عاموس، عوبدیاہ، یوناہ، میکاہ، ناحوم، حبقوق، صفنیاہ، حجی، زکریاہ اور ملاکی۔ انہیں چھوٹے انبیاء اس لیے کہا جاتا ہے کہ ان کی کتابیں عموماً مختصر ہیں؛ ان کے پیغامات کی اہمیت کم نہیں۔",
          "ان چھوٹے انبیاء نے مختلف ادوار میں خدا کے پیغامات پہنچائے۔ عاموس نے غریبوں کے ساتھ انصاف پر زور دیا، میکاہ نے انصاف، رحم اور فروتنی کی تعلیم دی، یوناہ کی کتاب خدا کی رحمت کو نمایاں کرتی ہے، حبقوق نے مشکل حالات میں ایمان کا سوال اٹھایا، جبکہ حجی اور زکریاہ نے جلاوطنی کے بعد ہیکل کی تعمیرِ نو کی حوصلہ افزائی کی۔ ملاکی نے خدا سے وفاداری اور آنے والے دن کی امید کا پیغام دیا۔",
          "انبیاء کی کتابیں ہمیں یاد دلاتی ہیں کہ حقیقی عبادت کے ساتھ انصاف، رحم، توبہ اور خدا کی فرمانبرداری بھی ضروری ہیں۔ یہودی اور مسیحی روایات ان کتابوں کی بعض پیش گوئیوں اور مسیحائی موضوعات کی مختلف تشریحات پیش کرتی ہیں۔"
        ],
        points: [
          "بڑے انبیاء کی کتابوں میں یسعیاہ، یرمیاہ، نوحہ، حزقی ایل اور دانی ایل شامل ہیں۔",
          "چھوٹے انبیاء کی بارہ کتابیں عہدِ عتیق کے آخری حصے میں شامل ہیں۔",
          "بڑے اور چھوٹے کی اصطلاح کتابوں کی طوالت کے لیے ہے، اہمیت کے لیے نہیں۔",
          "انبیاء نے توبہ، انصاف، خدا کی وفاداری اور بحالی کا پیغام دیا۔",
          "انبیاء کی کتابیں خدا کی عدالت کے ساتھ اس کی رحمت اور امید کو بھی ظاہر کرتی ہیں۔"
        ],
      },

      
      {
        title: "۷۔ پروٹسٹنٹ، کیتھولک اور آرتھوڈوکس روایات میں عہدِ عتیق کی کتابیں",
        paragraphs: [
          "مختلف مسیحی روایات میں عہدِ عتیق کی کتابوں کی تعداد اور ترتیب میں کچھ فرق پایا جاتا ہے۔ یہ فرق بائبل کی تاریخ، قدیم یہودی صحائف، یونانی سیپٹواجِنٹ اور کلیسیائی روایات سے تعلق رکھتا ہے۔ ان اختلافات کو سمجھنے سے ہم مسیحی تاریخ اور بائبلی مجموعے کی تشکیل کو بہتر طور پر جان سکتے ہیں۔",
          "پروٹسٹنٹ بائبل میں عہدِ عتیق کی ۳۹ کتابیں شامل ہیں۔ یہ کتابیں بنیادی طور پر عبرانی بائبل کے صحائف پر مشتمل ہیں، اگرچہ ان کی ترتیب اور گنتی یہودی تنخ سے مختلف ہے۔ تنخ میں یہی بنیادی صحائف ۲۴ کتابوں کی صورت میں شمار کیے جاتے ہیں، کیونکہ بعض کتابیں وہاں ایک ہی مجموعے میں شامل ہیں۔",
          "کیتھولک بائبل میں عہدِ عتیق کی ۴۶ کتابیں شامل ہیں۔ ان میں سات ایسی کتابیں بھی شامل ہیں جنہیں کیتھولک روایت میں قانونی اور مقدس صحائف کا حصہ مانا جاتا ہے، جبکہ پروٹسٹنٹ روایت انہیں عموماً اپوکرفا کہتی ہے۔ ان سات کتابوں میں طوبیت، یہودیت، حکمت، یسوع بن سیراخ، باروک، مکابیوں کی پہلی اور دوسری کتاب شامل ہیں۔ آستر اور دانی ایل کی کتابوں میں بھی اضافی حصے موجود ہیں۔",
          "آرتھوڈوکس کلیسیاؤں میں عہدِ عتیق کے مجموعے مختلف روایات کے مطابق کچھ فرق رکھتے ہیں۔ یونانی آرتھوڈوکس روایت میں عموماً طوبیت، یہودیت، حکمت، یسوع بن سیراخ، مکابیوں کی پہلی، دوسری اور تیسری کتاب، اور زبور ۱۵۱ جیسے متون شامل ہوتے ہیں۔ بعض روایات میں عزرا کی پہلی کتاب اور منسی کی دعا جیسے متون بھی ملتے ہیں۔ اس لیے تمام آرتھوڈوکس کلیسیاؤں کے مجموعے کو ایک جیسا قرار دینا درست نہیں۔",
          "سیپٹواجِنٹ عہدِ عتیق کے صحائف کا قدیم یونانی ترجمہ ہے۔ یونانی بولنے والے بہت سے یہودیوں اور ابتدائی مسیحیوں نے اسے استعمال کیا۔ مختلف مسیحی روایات میں اس کے اثرات اور اس سے وابستہ اضافی کتابوں کی قبولیت نے عہدِ عتیق کے مجموعے کی تشکیل میں اہم کردار ادا کیا۔",
          "اصلاحِ کلیسیا کے دور میں پروٹسٹنٹ رہنماؤں نے عہدِ عتیق کے لیے عبرانی صحائف کی کتابوں کو بنیاد بنایا، جبکہ کیتھولک کلیسیا نے اپنی روایت میں اضافی کتابوں کو بھی قانونی صحائف کے طور پر برقرار رکھا۔ آرتھوڈوکس روایات میں بھی قدیم یونانی صحائف اور مقامی کلیسیائی تاریخ کے اثرات موجود ہیں۔",
          "ان اختلافات کا مطالعہ کرتے وقت ضروری ہے کہ ہم ہر روایت کو اس کے تاریخی اور مذہبی پس منظر میں سمجھیں۔ کتابوں کی تعداد میں فرق کو جاننا مفید ہے، لیکن اس موضوع پر گفتگو احترام، دیانت داری اور علمی احتیاط کے ساتھ ہونی چاہیے۔"
        ],
        points: [
          "پروٹسٹنٹ عہدِ عتیق میں ۳۹ کتابیں شامل ہیں۔",
          "عبرانی تنخ میں یہی بنیادی صحائف ۲۴ کتابوں کی صورت میں شمار کیے جاتے ہیں۔",
          "کیتھولک عہدِ عتیق میں ۴۶ کتابیں شامل ہیں، جن میں سات اضافی کتابیں بھی ہیں۔",
          "آرتھوڈوکس کلیسیاؤں کے عہدِ عتیق کے مجموعے مختلف روایات کے مطابق مختلف ہو سکتے ہیں۔",
          "سیپٹواجِنٹ نے ابتدائی یہودی اور مسیحی صحائف کی تاریخ پر گہرا اثر ڈالا۔",
          "مختلف روایات کا مطالعہ احترام اور تاریخی درستگی کے ساتھ کرنا چاہیے۔"
        ],
      },

      
      {
        title: "۸۔ عہدِ عتیق کا تاریخی پس منظر اور زمانی ترتیب",
        paragraphs: [
          "عہدِ عتیق کی کتابیں مختلف تاریخی ادوار اور حالات سے تعلق رکھتی ہیں۔ ان میں بزرگوں کا زمانہ، مصر سے خروج، اسرائیل میں بادشاہت، سلطنت کی تقسیم، جلاوطنی اور واپسی جیسے اہم واقعات بیان ہوئے ہیں۔ ان ادوار کو سمجھنے سے بائبلی پیغام اور اسرائیل کی تاریخ کا پس منظر واضح ہوتا ہے۔",
          "آباؤ اجداد یا بزرگوں کا زمانہ ابراہیم، اسحاق، یعقوب اور یوسف سے وابستہ ہے۔ روایتی طور پر اس دور کو دوسری ہزار سالہ قبل مسیح کے ابتدائی یا درمیانی حصے سے جوڑا جاتا ہے، لیکن ان واقعات کی درست تاریخوں کے بارے میں اہلِ علم میں اختلاف پایا جاتا ہے۔",
          "مصر سے خروج اور شریعت کے دیے جانے کا زمانہ بھی دوسری ہزار سالہ قبل مسیح سے منسوب کیا جاتا ہے۔ اس کی درست تاریخ پر مختلف تاریخی اور علمی آراء موجود ہیں۔ اس کے بعد اسرائیلی قوم کی سرزمین میں آبادکاری اور قاضیوں کا دور آیا، جسے روایتی طور پر دوسری ہزار سالہ قبل مسیح کے آخری حصے سے جوڑا جاتا ہے۔",
          "اسرائیل میں متحدہ بادشاہت کا زمانہ تقریباً ۱۰۰۰ سے ۹۳۰ قبل مسیح تک سمجھا جاتا ہے۔ ساؤل، داؤد اور سلیمان اس دور کے اہم بادشاہ تھے۔ سلیمان کے بعد سلطنت تقسیم ہو گئی اور شمالی سلطنت اسرائیل جبکہ جنوبی سلطنت یہوداہ وجود میں آئیں۔",
          "تقریباً ۹۳۰ سے ۷۲۲ قبل مسیح تک تقسیم شدہ سلطنت کا دور جاری رہا۔ ۷۲۲ قبل مسیح میں آشوری سلطنت نے سامریہ فتح کیا اور شمالی سلطنت اسرائیل کا خاتمہ ہوا۔ جنوبی سلطنت یہوداہ اس کے بعد بھی کچھ عرصہ قائم رہی۔",
          "بابلی جلاوطنی کا دور چھٹی صدی قبل مسیح میں اہم موڑ ثابت ہوا۔ بابلی سلطنت نے ۵۹۷ قبل مسیح میں یروشلیم پر قبضہ کیا اور ۵۸۷/۵۸۶ قبل مسیح میں شہر اور پہلی ہیکل کو تباہ کر دیا۔ یہوداہ کے بہت سے باشندوں کو بابل میں جلاوطن کیا گیا۔",
          "۵۳۹ قبل مسیح میں فارس کے بادشاہ خورس نے بابل فتح کیا اور جلاوطن یہودیوں کو واپسی کی اجازت ملی۔ دوسری ہیکل کی تعمیر تقریباً ۵۱۶/۵۱۵ قبل مسیح میں مکمل ہوئی۔ یہ دور ہیکل کی بحالی، مذہبی زندگی کی تنظیمِ نو اور صحائف کی تعلیم کے لیے اہم تھا۔",
          "۳۳۲ قبل مسیح میں سکندرِ اعظم کی فتوحات کے بعد یہ علاقہ یونانی اثر و رسوخ میں آیا۔ دوسری صدی قبل مسیح میں مکابیوں کی تحریک اور حشمونی دور شروع ہوا۔ ۶۳ قبل مسیح میں رومی جنرل پومپی نے یروشلیم پر قبضہ کیا اور یہوداہ رومی اقتدار کے زیرِ اثر آ گیا۔",
          "یہ تمام تاریخیں عمومی تاریخی رہنمائی کے لیے ہیں۔ بعض بائبلی واقعات کی تاریخوں پر اختلاف موجود ہے، اور کسی واقعے کا زمانہ اس بات سے مختلف ہو سکتا ہے کہ اس واقعے سے متعلق کتاب کب لکھی یا مرتب کی گئی۔ اس لیے تاریخی ترتیب اور کتابوں کی تصنیف کی تاریخ کو الگ الگ سمجھنا ضروری ہے۔"
        ],
        points: [
          "آباؤ اجداد کا زمانہ ابراہیم، اسحاق، یعقوب اور یوسف سے وابستہ ہے۔",
          "متحدہ بادشاہت تقریباً ۱۰۰۰ سے ۹۳۰ قبل مسیح تک قائم رہی۔",
          "آشوری سلطنت نے ۷۲۲ قبل مسیح میں سامریہ فتح کیا۔",
          "بابلیوں نے ۵۸۷/۵۸۶ قبل مسیح میں یروشلیم اور پہلی ہیکل تباہ کی۔",
          "فارس کے دور میں جلاوطن یہودیوں کو واپسی کی اجازت ملی اور دوسری ہیکل تعمیر ہوئی۔",
          "یونانی اور رومی ادوار نے عہدِ عتیق کے آخری تاریخی پس منظر کو تشکیل دیا۔",
          "قدیم واقعات کی بعض تاریخیں علمی بحث اور تحقیق کا موضوع ہیں۔"
        ],
      },

     
      {
        title: "۹۔ عہدِ عتیق کا مرکزی پیغام اور آج کے دور میں اس کی اہمیت",
        paragraphs: [
          "عہدِ عتیق کا مرکزی پیغام یہ ہے کہ خدا تمام کائنات کا خالق ہے اور انسان کے ساتھ تعلق قائم کرنا چاہتا ہے۔ پیدائش کی کتاب خدا کو خالق اور انسان کو اس کی صورت پر پیدا کیا گیا ظاہر کرتی ہے۔ انسان کے گناہ اور نافرمانی کے باوجود خدا اپنی مخلوق کو ترک نہیں کرتا بلکہ اپنی رحمت اور نجات کے منصوبے کو آگے بڑھاتا ہے۔",
          "خدا نے ابراہیم اور اس کی نسل کے ساتھ عہد قائم کیا اور اسرائیل کو اپنی قوم کے طور پر بلایا۔ اس عہد میں خدا کی وفاداری کے ساتھ قوم کی ذمہ داری بھی شامل تھی۔ شریعت نے انہیں خدا سے محبت، اس کی فرمانبرداری، پاکیزگی اور ایک دوسرے کے ساتھ انصاف کرنے کی تعلیم دی۔",
          "عہدِ عتیق بار بار واضح کرتا ہے کہ حقیقی عبادت صرف ظاہری مذہبی رسومات تک محدود نہیں۔ خدا اپنے لوگوں سے انصاف، رحم، دیانت داری اور کمزوروں کی حفاظت کا تقاضا کرتا ہے۔ انبیاء نے ظلم، بت پرستی اور نافرمانی کے خلاف آواز اٹھائی اور قوم کو توبہ اور خدا کی طرف واپسی کی دعوت دی۔",
          "عہدِ عتیق کی حکمت کی کتابیں ہمیں دعا، صبر، درست فیصلوں، محنت، محبت اور زندگی کے مشکل سوالات پر غور کرنا سکھاتی ہیں۔ زبور ہمیں ہر حال میں خدا کے حضور آنے کی دعوت دیتا ہے، جبکہ امثال روزمرہ زندگی میں حکمت اور راستبازی کی اہمیت بیان کرتی ہے۔",
          "عہدِ عتیق میں خدا کی عدالت کے ساتھ بحالی اور امید کا پیغام بھی موجود ہے۔ جلاوطنی، تباہی اور انسانی ناکامی کے باوجود خدا کی وفاداری اور رحم نمایاں رہتے ہیں۔ انبیاء کی کتابوں میں نئی امید، بحالی اور خدا کے لوگوں کے مستقبل سے متعلق وعدے بیان کیے گئے ہیں۔",
          "مسیحی ایمان کے مطابق عہدِ عتیق کی کتابیں یسوع مسیح کے پیغام اور خدمت کو سمجھنے کے لیے بنیادی پس منظر فراہم کرتی ہیں۔ مسیحی یسوع کی تعلیمات اور عہدِ جدید کی روشنی میں ان صحائف میں نجات، عہد اور مسیحائی امید کے موضوعات کو دیکھتے ہیں۔ تاہم یہودی روایت انہی صحائف کی اپنی مذہبی اور تفسیری بنیادوں پر تشریح کرتی ہے، اور اسے بھی درست طور پر سمجھنا ضروری ہے۔",
          "آج عہدِ عتیق کا مطالعہ ہمیں خدا کی ذات، انسانی فطرت، گناہ، انصاف، رحم، ایمان اور امید کے بارے میں گہری سمجھ فراہم کرتا ہے۔ یہ ہمیں اپنی زندگی کا جائزہ لینے، خدا کے ساتھ تعلق مضبوط کرنے، دوسروں کے ساتھ انصاف اور محبت سے پیش آنے اور کلامِ مقدس کو ذمہ داری کے ساتھ سمجھنے کی ترغیب دیتا ہے۔"
        ],
        points: [
          "خدا تمام کائنات کا خالق ہے اور انسان کے ساتھ تعلق قائم کرنا چاہتا ہے۔",
          "خدا کا عہد وفاداری، محبت اور فرمانبرداری کی دعوت دیتا ہے۔",
          "حقیقی عبادت کے ساتھ انصاف، رحم اور پاکیزہ زندگی بھی ضروری ہے۔",
          "عہدِ عتیق کی کتابیں خدا کی عدالت، رحمت، بحالی اور امید کو ظاہر کرتی ہیں۔",
          "مسیحی ایمان میں عہدِ عتیق یسوع مسیح کے پیغام کو سمجھنے کا بنیادی پس منظر ہے۔",
          "عہدِ عتیق آج بھی ایمان، حکمت اور روزمرہ زندگی کے لیے اہم تعلیم فراہم کرتا ہے۔"
        ],
      },

    ],
    imagesTitle: "عہدِ عتیق: ساخت اور کتابیں",
    imagesNote:
  "یہ تصاویر عبرانی بائبل کی ساخت، توریت کے طومار اور شریعت کی پانچ کتابوں کا تعارف پیش کرتی ہیں۔",
    timelineTitle: "عہدِ عتیق: تاریخی ٹائم لائن",
    timelineNote:
  "تمام تاریخیں تقریبی ہیں اور بعض واقعات کی تاریخوں کے بارے میں مؤرخین میں اختلاف پایا جاتا ہے۔ یہ ٹائم لائن بزرگ آباؤ اجداد سے لے کر رومی دور تک قدیم اسرائیل کی تاریخ کے اہم ادوار کو نمایاں کرتی ہے۔",
    scriptureTitle: "عہدِ عتیق کے اہم بائبلی حوالہ جات",
    scriptureNote:
  "ہر حوالے کو اس کے ادبی اور تاریخی سیاق و سباق میں پڑھیں۔ یہ حوالے عہدِ عتیق کی ساخت، تاریخ، حکمت، نبوت، خدا کے عہد اور اس کے مرکزی پیغام کو سمجھنے میں مدد دیتے ہیں۔",
    scriptures: [
  {
    reference: "پیدائش ۱:۱",
    explanation:
      "عہدِ عتیق کا آغاز اس اعلان سے ہوتا ہے کہ خدا آسمان اور زمین کا خالق ہے۔",
  },
  {
    reference: "پیدائش ۱۲:۱–۳",
    explanation:
      "خدا ابراہیم کو بلاتا ہے اور وعدہ کرتا ہے کہ اس کے وسیلے سے زمین کے تمام خاندان برکت پائیں گے۔",
  },
  {
    reference: "خروج ۲۰:۱–۱۷",
    explanation:
      "دس احکام خدا کے عہد اور اسرائیل کے لیے اخلاقی تعلیمات کے اہم اصول بیان کرتے ہیں۔",
  },
  {
    reference: "استثنا ۶:۴–۹",
    explanation:
      "شمع اسرائیل کو خداوند سے پورے دل سے محبت کرنے اور اس کے احکام آئندہ نسلوں تک پہنچانے کی تعلیم دیتا ہے۔",
  },
  {
    reference: "یشوع ۱:۸",
    explanation:
      "یشوع کو شریعت کی کتاب پر غور کرنے اور اس کی تعلیم کے مطابق زندگی گزارنے کی ہدایت دی جاتی ہے۔",
  },
  {
    reference: "زبور ۲۳:۱–۶",
    explanation:
      "داؤد کا یہ زبور خدا پر بھروسے کا اظہار کرتا ہے جو اپنے لوگوں کی رہنمائی، حفاظت اور ضروریات پوری کرتا ہے۔",
  },
  {
    reference: "امثال ۱:۷",
    explanation:
      "خداوند کا خوف علم کی ابتدا قرار دیا گیا ہے۔",
  },
  {
    reference: "یسعیاہ ۵۳:۳–۶",
    explanation:
      "مسیحی اس دکھ اٹھانے والے خادم کے بارے میں اس عبارت کو یسوع مسیح کے حوالے سے سمجھتے ہیں۔",
  },
  {
    reference: "میکاہ ۶:۸",
    explanation:
      "خدا اپنے لوگوں کو انصاف کرنے، رحم سے محبت رکھنے اور فروتنی سے اپنے ساتھ چلنے کی تعلیم دیتا ہے۔",
  },
  {
    reference: "لوقا ۲۴:۲۷، ۴۴",
    explanation:
      "یسوع مقدس صحائف کا حوالہ دیتے ہوئے واضح کرتا ہے کہ وہ اس کی خدمت اور بائبل کی کہانی سے کس طرح تعلق رکھتے ہیں۔",
  },
],
    termsTitle: "عہدِ عتیق کی اہم اصطلاحات",
    terms: [
  {
    term: "عہدِ عتیق",
    definition:
      "مسیحی بائبل کا پہلا بڑا حصہ، جس میں وہ مقدس صحائف شامل ہیں جو یہودی بائبلی روایت میں بھی موجود ہیں۔",
  },
  {
    term: "تنخ",
    definition:
      "عبرانی بائبل کا روایتی یہودی نام، جو تورات، نبییم اور کتوبیم کے ابتدائی حروف سے بنا ہے۔",
  },
  {
    term: "تورات",
    definition:
      "عبرانی بائبل کی پہلی پانچ کتابیں: پیدائش، خروج، احبار، گنتی اور استثنا۔",
  },
  {
    term: "نبییم",
    definition:
      "عبرانی بائبل کا دوسرا بڑا حصہ، جس میں انبیاء کی کتابیں شامل ہیں۔",
  },
  {
    term: "کتوبیم",
    definition:
      "عبرانی بائبل کا تیسرا بڑا حصہ، جسے صحائف یا تحریریں بھی کہا جاتا ہے۔",
  },
  {
    term: "اسفارِ خمسہ",
    definition:
      "پانچ کتابوں کے مجموعے کے لیے استعمال ہونے والی اصطلاح، جو عموماً بائبل کی پہلی پانچ کتابوں کے لیے آتی ہے۔",
  },
  {
    term: "ثانوی قانونی کتابیں",
    definition:
      "وہ کتابیں جو کیتھولک کلیسیا کے عہدِ عتیق میں شامل ہیں لیکن پروٹسٹنٹ بائبل کے مجموعے میں شامل نہیں۔",
  },
  {
    term: "سیپٹواجِنٹ",
    definition:
      "یہودی صحائف کا قدیم یونانی ترجمہ، جو کئی نسلوں کے دوران تیار ہوا۔",
  },
  {
    term: "نبی",
    definition:
      "وہ شخص جسے خدا اپنا پیغام پہنچانے کے لیے بلاتا ہے، جو اکثر ایمان، انصاف، توبہ اور امید کے بارے میں بات کرتا ہے۔",
  },
  {
    term: "عہد",
    definition:
      "خدا کی طرف سے لوگوں کے ساتھ قائم کیا گیا مقدس تعلق یا معاہدہ، جس میں وعدے اور ذمہ داریاں شامل ہوتی ہیں۔",
  },
],
    keyPointsTitle: "عہدِ عتیق کے اہم نکات",
    keyPoints: [
  "عہدِ عتیق مسیحی بائبل کا پہلا بڑا حصہ ہے۔",
  "پروٹسٹنٹ عہدِ عتیق میں ۳۹ کتابیں شامل ہیں۔",
  "عبرانی تنخ میں ۲۴ کتابیں ہیں، جو تورات، نبییم اور کتوبیم میں تقسیم ہیں۔",
  "تورات میں پیدائش، خروج، احبار، گنتی اور استثنا کی کتابیں شامل ہیں۔",
  "عہدِ عتیق میں تاریخی، شاعرانہ، حکمت اور نبوت کی تحریریں شامل ہیں۔",
  "بڑے اور چھوٹے انبیاء کی درجہ بندی بنیادی طور پر ان کی کتابوں کی طوالت کے مطابق ہے، نہ کہ ان کی اہمیت کے مطابق۔",
  "پروٹسٹنٹ، کیتھولک اور آرتھوڈوکس روایات میں عہدِ عتیق کی کتابوں کے مجموعے میں فرق پایا جاتا ہے۔",
  "قدیم اسرائیل کی تاریخ میں بادشاہت، منقسم سلطنت، اسیری اور واپسی کے ادوار شامل ہیں۔",
  "انصاف، رحم، عہد، عبادت، حکمت اور امید عہدِ عتیق کے بنیادی موضوعات ہیں۔",
  "مسیحی عہدِ عتیق کو یسوع مسیح کے حوالے سے پڑھتے ہیں، جبکہ یہودی روایت ان صحائف کی اپنی مخصوص تفہیم رکھتی ہے۔",
],
    quizTitle: "علم کا جائزہ: سبق ۳",
    quizDescription:
  "عہدِ عتیق کی تاریخ، کتابوں، ساخت اور بنیادی تعلیمات کے بارے میں اپنی معلومات جانچیں۔ ہر سوال کے لیے ایک جواب منتخب کریں اور تمام دس سوالات مکمل کریں۔",
    submitQuiz: "جوابات جمع کریں",
    resetQuiz: "دوبارہ کوشش کریں",
    answerRequired: "براہِ کرم جمع کرنے سے پہلے تمام دس سوالات کے جواب دیں۔",
    scoreLabel: "آپ کا نتیجہ",
    correctLabel: "درست",
    incorrectLabel: "غلط",
    answerKeyTitle: "جوابات کی وضاحت",
    reflectionTitle: "عہدِ عتیق: غور و فکر اور گفتگو",
reflectionDescription:
  "ان سوالات پر غور کریں تاکہ عہدِ عتیق کی تاریخ، تعلیمات، عہد اور بائبل کے مجموعی پیغام کو بہتر طور پر سمجھ سکیں۔",
    reflections: [
  "عہدِ عتیق بائبل کی مکمل کہانی کو سمجھنے کے لیے کیوں اہم ہے؟",
  "عبرانی تنخ اور پروٹسٹنٹ عہدِ عتیق کی کتابوں کی ترتیب اور تعداد میں کیا فرق ہے؟",
  "شریعت، تاریخی کتابیں، حکمت کی تحریریں اور انبیاء کی کتابیں خدا کے پیغام کو سمجھنے میں کس طرح مدد دیتی ہیں؟",
  "قدیم اسرائیل کی تاریخ سے ایمان، فرمانبرداری، توبہ اور خدا کے عہد کے بارے میں ہم کیا سیکھ سکتے ہیں؟",
  "مسیحی عہدِ عتیق اور یسوع مسیح کے درمیان تعلق کو کس طرح سمجھتے ہیں؟",
],
    bibliographyTitle: "عہدِ عتیق کے لیے تجویز کردہ علمی کتابیات",
    bibliographyNote:
  "یہ علمی کتابیں عہدِ عتیق، عبرانی بائبل، اس کے تاریخی پس منظر، ادبی اصناف اور بنیادی الٰہیاتی موضوعات کے مزید مطالعے کے لیے مفید ہیں۔",
    imageCreditsTitle: "عہدِ عتیق کی تصاویر اور تعارفی وضاحتیں",
    imageCredits: [
  "توریت کی پانچ کتابیں: تعلیمی تصویر جس میں پیدائش، خروج، احبار، گنتی اور استثنا کی کتابیں دکھائی گئی ہیں۔",
  "عبرانی بائبل کی ساخت: تعلیمی تصویر جس میں تورات، نبییم اور کتوبیم کی تقسیم دکھائی گئی ہے۔",
  "توریت کا طومار: روایتی توریت کے طومار کی تعلیمی تصویر۔",
],
    previousLesson: "پچھلا سبق",
    nextLesson: "اگلا سبق",
    courseHome: "کورس کا مرکزی صفحہ",
    footer: "بائبل اور ہم اکیڈمی | سرٹیفکیٹ اِن بائبلیکل اسٹڈیز",
     sectionsLabel: "مطالعے کے حصے",
  },
};

const timeline = [
  {
    date: "c. 1200–100 BC",
    dateUr: "تقریباً ۱۲۰۰–۱۰۰ قبل مسیح",
    title: "Ancient biblical writings",
    titleUr: "قدیم بائبلی تحریریں",
    description:
      "Biblical books were composed and developed over many centuries, primarily in Hebrew with some Aramaic.",
    descriptionUr:
      "بائبلی کتابیں کئی صدیوں میں وجود میں آئیں اور ترقی پذیر ہوئیں۔ زیادہ تر عبرانی اور بعض حصے ارامی زبان میں ہیں۔",
  },
  {
    date: "c. 3rd–1st century BC",
    dateUr: "تقریباً تیسری تا پہلی صدی قبل مسیح",
    title: "Greek Septuagint",
    titleUr: "یونانی سیپٹواجِنٹ",
    description:
      "Jewish Scriptures were translated into Greek, beginning with the Torah.",
    descriptionUr:
      "یہودی صحائف کا یونانی زبان میں ترجمہ شروع ہوا، جس کا آغاز توریت سے ہوا۔",
  },
  {
    date: "c. 3rd century BC–1st century AD",
    dateUr: "تقریباً تیسری صدی قبل مسیح تا پہلی صدی عیسوی",
    title: "Dead Sea Scrolls",
    titleUr: "بحرِ مردار کے طومار",
    description:
      "Ancient manuscripts preserve important evidence of Jewish Scriptures.",
    descriptionUr:
      "قدیم قلمی نسخے یہودی صحائف کے بارے میں اہم تاریخی شواہد محفوظ رکھتے ہیں۔",
  },
  {
    date: "1st century AD",
    dateUr: "پہلی صدی عیسوی",
    title: "New Testament writings",
    titleUr: "عہدِ جدید کی تحریریں",
    description:
      "The New Testament books were written in Greek.",
    descriptionUr:
      "عہدِ جدید کی کتابیں یونانی زبان میں لکھی گئیں۔",
  },
  {
    date: "4th century AD",
    dateUr: "چوتھی صدی عیسوی",
    title: "Great biblical codices",
    titleUr: "عظیم بائبلی کوڈیکس",
    description:
      "Codex Vaticanus and Codex Sinaiticus represent important early biblical manuscript collections.",
    descriptionUr:
      "کوڈیکس ویٹیکینس اور کوڈیکس سینیٹیکس ابتدائی بائبلی قلمی نسخوں کے اہم مجموعے ہیں۔",
  },
  {
    date: "Late 4th–early 5th century AD",
    dateUr: "چوتھی صدی کے آخر تا پانچویں صدی کے آغاز",
    title: "Latin Vulgate",
    titleUr: "لاطینی وُلگیٹ",
    description:
      "Jerome undertook important Latin biblical translation and revision work.",
    descriptionUr:
      "جیروم نے بائبل کے لاطینی ترجمے اور نظرثانی کا اہم کام کیا۔",
  },
  {
    date: "c. 1454–1455 AD",
    dateUr: "تقریباً ۱۴۵۴ء تا ۱۴۵۵ء",
    title: "Gutenberg Bible",
    titleUr: "گٹن برگ بائبل",
    description:
      "A landmark in the history of European printing.",
    descriptionUr:
      "یورپ میں طباعت کی تاریخ کا ایک اہم سنگِ میل۔",
  },
  {
    date: "16th century to present",
    dateUr: "سولہویں صدی سے آج تک",
    title: "Bible translations",
    titleUr: "بائبل کے تراجم",
    description:
      "Translation expanded into many languages and continues today.",
    descriptionUr:
      "بائبل کے تراجم بہت سی زبانوں میں پھیلے اور آج بھی جاری ہیں۔",
  },
];

const images = [
  {
    src: "/images/academy/lesson-2/papyrus-and-parchment.webp",
    alt: "Educational illustration of ancient papyrus and parchment writing materials",
    altUr: "قدیم پاپائرس اور پارچمنٹ کے تحریری مواد کی تعلیمی تصویر",
    title: "Papyrus and Parchment",
    titleUr: "پاپائرس اور پارچمنٹ",
    caption:
      "Two important writing materials used in the ancient world.",
    captionUr:
      "قدیم دنیا میں استعمال ہونے والے دو اہم تحریری مواد۔",
  },
  {
    src: "/images/academy/lesson-2/great-isaiah-scroll.webp",
    alt: "The Great Isaiah Scroll from the Dead Sea Scrolls collection",
    altUr: "بحرِ مردار کے طوماروں میں شامل عظیم طومارِ یسعیاہ",
    title: "The Great Isaiah Scroll",
    titleUr: "عظیم طومارِ یسعیاہ",
    caption:
      "An important ancient manuscript witness to the book of Isaiah.",
    captionUr:
      "کتابِ یسعیاہ کے متن کا ایک اہم قدیم قلمی نسخہ۔",
  },
  {
    src: "/images/academy/lesson-2/dead-sea-scrolls-jordan-museum.webp",
    alt: "Dead Sea Scrolls display at the Jordan Museum",
    altUr: "اردن میوزیم میں بحرِ مردار کے طوماروں کی نمائش",
    title: "Dead Sea Scrolls",
    titleUr: "بحرِ مردار کے طومار",
    caption:
      "Manuscripts that provide valuable evidence for the study of ancient Jewish texts.",
    captionUr:
      "ایسے قلمی نسخے جو قدیم یہودی تحریروں کے مطالعے کے لیے قیمتی شواہد فراہم کرتے ہیں۔",
  },
  {
    src: "/images/academy/lesson-2/codex-vaticanus.webp",
    alt: "A page from Codex Vaticanus",
    altUr: "کوڈیکس ویٹیکینس کا ایک صفحہ",
    title: "Codex Vaticanus",
    titleUr: "کوڈیکس ویٹیکینس",
    caption:
      "An important fourth-century Greek biblical manuscript.",
    captionUr:
      "چوتھی صدی کا ایک اہم یونانی بائبلی قلمی نسخہ۔",
  },
  {
    src: "/images/academy/lesson-2/codex-sinaiticus.webp",
    alt: "A page from Codex Sinaiticus",
    altUr: "کوڈیکس سینیٹیکس کا ایک صفحہ",
    title: "Codex Sinaiticus",
    titleUr: "کوڈیکس سینیٹیکس",
    caption:
      "One of the most significant surviving early Christian biblical codices.",
    captionUr:
      "ابتدائی مسیحی بائبل کے محفوظ رہ جانے والے اہم کوڈیکس میں سے ایک۔",
  },
  {
    src: "/images/academy/lesson-2/gutenberg-printing-press.webp",
    alt: "Educational illustration of a historical movable-type printing press",
    altUr: "قدیم متحرک حروف والے مطبع کی تعلیمی تصویر",
    title: "The Printing Press",
    titleUr: "مطبوعہ کتابوں کی ابتدا",
    caption:
      "Movable-type printing transformed the production of books in Europe.",
    captionUr:
      "متحرک حروف کی طباعت نے یورپ میں کتابوں کی تیاری کا طریقہ بدل دیا۔",
  },
];

const quiz: Record<Language, QuizQuestion[]> = {
  en: [
    {
      question: "Which statement best describes the Old Testament?",
      options: [
        "It was written by one person in one year.",
        "It developed through composition, collection, copying, and translation over time.",
        "It was first printed in the twentieth century.",
        "All biblical books were originally written in Latin.",
      ],
      answer: 1,
      explanation:
        "The Bible is a collection of writings produced in different periods and transmitted through a long historical process.",
    },
    {
      question: "Which language was used for most of the Old Testament?",
      options: ["Greek", "Latin", "Hebrew", "Aramaic"],
      answer: 2,
      explanation:
        "Most of the Old Testament was written in Hebrew, with some portions in Aramaic.",
    },
    {
      question: "In which language were the New Testament books written?",
      options: ["Greek", "Latin", "Hebrew", "Egyptian"],
      answer: 0,
      explanation:
        "The New Testament books were written in Greek, the widely used language of the eastern Mediterranean world.",
    },
    {
      question: "What was papyrus made from?",
      options: [
        "Animal bones",
        "The pith of a plant",
        "Metal sheets",
        "Stone tablets",
      ],
      answer: 1,
      explanation:
        "Papyrus was made from the pith of the papyrus plant and prepared as a writing surface.",
    },
    {
      question: "What is a textual variant?",
      options: [
        "A modern Bible cover",
        "A difference in wording between manuscript witnesses",
        "A chapter heading",
        "A type of printing press",
      ],
      answer: 1,
      explanation:
        "Textual variants are differences in wording or form found among copies of a text.",
    },
    {
      question: "When did the Dead Sea Scrolls discoveries begin?",
      options: ["1947", "1455", "1800", "2001"],
      answer: 0,
      explanation:
        "The discoveries began in 1947 in the Qumran region near the Dead Sea.",
    },
    {
      question: "What is the Great Isaiah Scroll?",
      options: [
        "A modern English translation",
        "A nearly complete ancient manuscript of Isaiah",
        "A printing machine",
        "A letter written by Paul",
      ],
      answer: 1,
      explanation:
        "The Great Isaiah Scroll preserves a nearly complete copy of the book of Isaiah and is generally dated to around the second century BC.",
    },
    {
      question: "To which century are Codex Vaticanus and Codex Sinaiticus generally dated?",
      options: ["First century BC", "Second century AD", "Fourth century AD", "Fifteenth century AD"],
      answer: 2,
      explanation:
        "Both are generally dated to the fourth century AD and are important early Greek biblical manuscripts.",
    },
    {
      question: "Who is especially associated with the Latin Vulgate?",
      options: ["Johannes Gutenberg", "Jerome", "Moses", "Luke"],
      answer: 1,
      explanation:
        "Jerome undertook important Latin translation and revision work in the late fourth and early fifth centuries.",
    },
    {
      question: "Why is the Gutenberg Bible historically important?",
      options: [
        "It was the first text ever written.",
        "It was an important early European printed Bible.",
        "It was written in Hebrew by Moses.",
        "It contains the Dead Sea Scrolls.",
      ],
      answer: 1,
      explanation:
        "Printed around 1454–1455, the Gutenberg Bible is a landmark in the history of European printing.",
    },
  ],
 ur: [
  {
    question: "مسیحی بائبل میں عہدِ عتیق کی کتنی کتابیں ہیں؟",
    options: ["۲۴", "۳۹", "۴۶", "۶۶"],
    answer: 1,
    explanation:
      "پروٹسٹنٹ بائبل میں عہدِ عتیق کی ۳۹ کتابیں شامل ہیں۔",
  },
  {
    question: "عبرانی بائبل کو روایتی طور پر کس نام سے پکارا جاتا ہے؟",
    options: ["سیپٹواجِنٹ", "تنخ", "وُلگیٹ", "پینٹاٹیوک"],
    answer: 1,
    explanation:
      "تنخ عبرانی بائبل کا روایتی یہودی نام ہے، جو تورات، نبییم اور کتوبیم کے ابتدائی حروف سے بنا ہے۔",
  },
  {
    question: "تورات میں کتنی کتابیں شامل ہیں؟",
    options: ["تین", "چار", "پانچ", "سات"],
    answer: 2,
    explanation:
      "تورات میں پیدائش، خروج، احبار، گنتی اور استثنا کی پانچ کتابیں شامل ہیں۔",
  },
  {
    question: "پینٹاٹیوک کا کیا مطلب ہے؟",
    options: [
      "تین کتابیں",
      "پانچ کتابیں",
      "بارہ کتابیں",
      "انبیاء کی کتابیں",
    ],
    answer: 1,
    explanation:
      "پینٹاٹیوک یونانی اصطلاح ہے جس کا مطلب پانچ کتابیں ہے اور یہ تورات کے لیے استعمال ہوتی ہے۔",
  },
  {
    question: "پروٹسٹنٹ عہدِ عتیق میں تاریخی کتابوں کے گروہ میں کتنی کتابیں شامل ہیں؟",
    options: ["پانچ", "سات", "دس", "بارہ"],
    answer: 3,
    explanation:
      "پروٹسٹنٹ عہدِ عتیق کی تاریخی کتابوں کے گروہ میں بارہ کتابیں شامل ہیں۔",
  },
  {
    question: "بڑے اور چھوٹے انبیاء کی اصطلاح بنیادی طور پر کس فرق کو ظاہر کرتی ہے؟",
    options: [
      "ان کی اہمیت",
      "ان کی عمر",
      "ان کی کتابوں کی طوالت",
      "ان کے زمانے",
    ],
    answer: 2,
    explanation:
      "بڑے اور چھوٹے انبیاء کی درجہ بندی بنیادی طور پر ان کی کتابوں کی طوالت کے مطابق ہے، نہ کہ ان کی اہمیت کے مطابق۔",
  },
  {
    question: "ان میں سے کون سی کتاب شاعری اور حکمت کی کتابوں میں شامل ہے؟",
    options: ["یشوع", "امثال", "یرمیاہ", "عزرا"],
    answer: 1,
    explanation:
      "امثال عہدِ عتیق کی حکمت کی کتابوں میں شامل ہے اور روزمرہ زندگی کے لیے عملی رہنمائی فراہم کرتی ہے۔",
  },
  {
    question: "کیتھولک بائبل میں عہدِ عتیق کی کتنی کتابیں شامل ہیں؟",
    options: ["۲۴", "۳۹", "۴۶", "۵۰"],
    answer: 2,
    explanation:
      "کیتھولک بائبل میں عہدِ عتیق کی ۴۶ کتابیں شامل ہیں۔",
  },
  {
    question: "سیپٹواجِنٹ کیا ہے؟",
    options: [
      "عبرانی صحائف کا قدیم یونانی ترجمہ",
      "عہدِ جدید کی پہلی کتاب",
      "ایک تاریخی شہر",
      "موسیٰ کی لکھی ہوئی کتاب",
    ],
    answer: 0,
    explanation:
      "سیپٹواجِنٹ یہودی صحائف کا قدیم یونانی ترجمہ ہے، جسے ابتدائی مسیحیوں نے بھی استعمال کیا۔",
  },
  {
    question: "آشوری سلطنت نے ۷۲۲ قبل مسیح میں کس شہر پر قبضہ کیا؟",
    options: ["یروشلیم", "بیت لحم", "سامریہ", "بابل"],
    answer: 2,
    explanation:
      "۷۲۲ قبل مسیح میں آشوری سلطنت نے سامریہ فتح کیا اور شمالی سلطنت اسرائیل کا خاتمہ ہوا۔",
    },
],
};

const bibliography = [
  "Metzger, Bruce M., and Bart D. Ehrman. The Text of the New Testament: Its Transmission, Corruption, and Restoration. 4th ed. Oxford University Press, 2005.",
  "Tov, Emanuel. Textual Criticism of the Hebrew Bible. 3rd ed. Fortress Press, 2012.",
  "Parker, D. C. An Introduction to the New Testament Manuscripts and Their Texts. Cambridge University Press, 2008.",
  "Wegner, Paul D. A Student's Guide to Textual Criticism of the Bible. IVP Academic, 2006.",
  "VanderKam, James C. The Dead Sea Scrolls Today. 2nd ed. Eerdmans, 2010.",
];

export default function LessonThreePage() {
  const [language, setLanguage] = useState<Language>("en");
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const t = content[language];
  const isUrdu = language === "ur";
  const questions = quiz[language];

  const score = questions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0),
    0
  );

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setAnswers([]);
    setSubmitted(false);
  }

  function selectAnswer(questionIndex: number, optionIndex: number) {
    if (submitted) return;

    setAnswers((current) => {
      const updated = [...current];
      updated[questionIndex] = optionIndex;
      return updated;
    });
  }

  function submitQuiz() {
    if (
      answers.length !== questions.length ||
      answers.some((answer) => answer === undefined || answer < 0)
    ) {
      alert(t.answerRequired);
      return;
    }

    setSubmitted(true);
  }

  function resetQuiz() {
    setAnswers([]);
    setSubmitted(false);
  }

  return (
    <main
      dir={isUrdu ? "rtl" : "ltr"}
      lang={isUrdu ? "ur" : "en"}
      className={`min-h-screen bg-slate-50 text-slate-800 ${
        isUrdu ? "font-[serif]" : ""
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Top Navigation */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/academy/introduction-to-the-bible"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            <span aria-hidden="true">{isUrdu ? "→" : "←"}</span>
            {t.backToCourse}
          </Link>

          <div
            className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm"
            aria-label="Choose language"
          >
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              aria-pressed={language === "en"}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                language === "en"
                  ? "bg-blue-700 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              English
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("ur")}
              aria-pressed={language === "ur"}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                language === "ur"
                  ? "bg-blue-700 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              اردو
            </button>
          </div>
        </div>

        {/* Chapter Heading */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-900 px-6 py-8 text-center text-white sm:px-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
              Bible Aur Hum Academy
            </p>

            <h1 className="text-3xl font-bold leading-relaxed sm:text-4xl">
              {t.title}
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
              {t.subtitle}
            </p>

            <p className="mt-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-blue-100">
              {t.duration}
            </p>
          </div>

          <div className="p-5 sm:p-8">
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
              <h2 className="mb-4 text-xl font-bold text-blue-950">
                {t.learningObjectivesTitle}
              </h2>

              <ul className="space-y-3">
                {t.learningObjectives.map((objective, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Introduction */}
            <section className="mt-10">
              <h2 className="mb-4 border-b border-slate-200 pb-3 text-2xl font-bold text-slate-900">
                {t.introductionTitle}
              </h2>

              <div className="space-y-5 text-[15px] leading-8 text-slate-700">
                {t.introduction.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Lesson Sections */}
            <div className="mt-10 space-y-10">
              {t.sections.map((section, index) => (
                <section
                  key={index}
                  className="border-b border-slate-200 pb-8 last:border-b-0"
                >
                  <div className="mb-4 flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                        {t.sectionsLabel} {index + 1}
                      </p>

                      <h2 className="text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-5 text-[15px] leading-8 text-slate-700">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>

                  {section.points && (
                    <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="mb-3 font-bold text-slate-900">
                        {isUrdu ? "اہم نکات" : "Important Points"}
                      </h3>

                      <ul className="space-y-2">
                        {section.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2 text-sm leading-7 text-slate-700"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Images */}
            <section className="mt-10">
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {t.imagesTitle}
              </h2>

              <p className="mb-6 text-sm leading-7 text-slate-600">
                {t.imagesNote}
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {images.map((image, index) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="relative aspect-[16/10] bg-slate-100">
                      <Image
                        src={image.src}
                        alt={isUrdu ? image.altUr : image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    <figcaption className="p-4">
                      <h3 className="font-bold text-slate-900">
                        {isUrdu ? image.titleUr : image.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {isUrdu ? image.captionUr : image.caption}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* Historical Timeline */}
            <section className="mt-12">
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {t.timelineTitle}
              </h2>

              <p className="mb-7 text-sm leading-7 text-slate-600">
                {t.timelineNote}
              </p>

              <div className="relative space-y-6 border-s-2 border-blue-200 ps-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    <span className="absolute -start-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-blue-100 bg-blue-700" />

                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="mb-2 text-sm font-bold text-blue-700">
                        {isUrdu ? item.dateUr : item.date}
                      </p>

                      <h3 className="text-lg font-bold text-slate-900">
                        {isUrdu ? item.titleUr : item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {isUrdu ? item.descriptionUr : item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Scripture References */}
            <section className="mt-12">
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {t.scriptureTitle}
              </h2>

              <p className="mb-5 text-sm leading-7 text-slate-600">
                {t.scriptureNote}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {t.scriptures.map((scripture, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-amber-200 bg-amber-50 p-5"
                  >
                    <h3 className="font-bold text-amber-950">
                      {scripture.reference}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {scripture.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Terms */}
            <section className="mt-12">
              <h2 className="mb-5 text-2xl font-bold text-slate-900">
                {t.termsTitle}
              </h2>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                {t.terms.map((term, index) => (
                  <div
                    key={index}
                    className={`grid gap-2 p-4 sm:grid-cols-[180px_1fr] sm:gap-5 ${
                      index !== t.terms.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }`}
                  >
                    <h3 className="font-bold text-blue-800">{term.term}</h3>

                    <p className="text-sm leading-7 text-slate-700">
                      {term.definition}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Points */}
            <section className="mt-12 rounded-xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
              <h2 className="mb-4 text-xl font-bold text-emerald-950">
                {t.keyPointsTitle}
              </h2>

              <ul className="space-y-3">
                {t.keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Interactive Quiz */}
            <section className="mt-12" id="lesson-quiz">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6 border-b border-slate-200 pb-5">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {t.quizTitle}
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {t.quizDescription}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-blue-700">
                    {isUrdu
                      ? "سوالات: ۱۰ | ہر درست جواب کا ایک نمبر"
                      : "Questions: 10 | One point for each correct answer"}
                  </p>
                </div>

                <div className="space-y-7">
                  {questions.map((question, questionIndex) => {
                    const isCorrect =
                      submitted &&
                      answers[questionIndex] === question.answer;

                    const isIncorrect =
                      submitted &&
                      answers[questionIndex] !== question.answer;

                    return (
                      <div
                        key={questionIndex}
                        className="border-b border-slate-100 pb-6 last:border-b-0"
                      >
                        <h3 className="mb-4 font-bold leading-8 text-slate-900">
                          <span className="me-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                            {questionIndex + 1}
                          </span>
                          {question.question}
                        </h3>

                        <div className="space-y-3">
                          {question.options.map((option, optionIndex) => {
                            const selected =
                              answers[questionIndex] === optionIndex;

                            const correctOption =
                              submitted && optionIndex === question.answer;

                            let optionClass =
                              "border-slate-200 bg-white hover:border-blue-300";

                            if (selected && !submitted) {
                              optionClass =
                                "border-blue-600 bg-blue-50 ring-1 ring-blue-600";
                            }

                            if (correctOption) {
                              optionClass =
                                "border-emerald-500 bg-emerald-50";
                            } else if (selected && isIncorrect) {
                              optionClass = "border-red-400 bg-red-50";
                            }

                            return (
                              <button
                                key={optionIndex}
                                type="button"
                                disabled={submitted}
                                onClick={() =>
                                  selectAnswer(questionIndex, optionIndex)
                                }
                                className={`flex w-full items-start gap-3 rounded-lg border p-3 text-start text-sm leading-7 transition ${optionClass} ${
                                  submitted ? "cursor-default" : "cursor-pointer"
                                }`}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-bold text-slate-600">
                                  {String.fromCharCode(65 + optionIndex)}
                                </span>

                                <span className="flex-1">{option}</span>

                                {correctOption && (
                                  <span className="font-bold text-emerald-700">
                                    ✓
                                  </span>
                                )}

                                {selected && isIncorrect && !correctOption && (
                                  <span className="font-bold text-red-600">
                                    ✕
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {submitted && (
                          <div
                            className={`mt-4 rounded-lg p-4 text-sm leading-7 ${
                              isCorrect
                                ? "bg-emerald-50 text-emerald-900"
                                : "bg-amber-50 text-amber-950"
                            }`}
                          >
                            <p className="mb-1 font-bold">
                              {isCorrect
                                ? t.correctLabel
                                : t.incorrectLabel}
                            </p>

                            <p>{question.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {!submitted ? (
                  <button
                    type="button"
                    onClick={submitQuiz}
                    className="mt-7 w-full rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
                  >
                    {t.submitQuiz}
                  </button>
                ) : (
                  <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6 text-center">
                    <h3 className="text-lg font-bold text-blue-950">
                      {t.scoreLabel}
                    </h3>

                    <p className="my-3 text-4xl font-extrabold text-blue-700">
                      {score} / {questions.length}
                    </p>

                    <p className="text-sm text-slate-700">
                      {isUrdu
                        ? `آپ نے ${questions.length} میں سے ${score} درست جوابات دیے۔`
                        : `You answered ${score} out of ${questions.length} questions correctly.`}
                    </p>

                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={resetQuiz}
                        className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                      >
                        {t.resetQuiz}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Reflection Questions */}
            <section className="mt-12">
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {t.reflectionTitle}
              </h2>

              <p className="mb-5 text-sm leading-7 text-slate-600">
                {t.reflectionDescription}
              </p>

              <div className="space-y-4">
                {t.reflections.map((reflection, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-8 text-slate-700">
                      {reflection}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bibliography */}
            <section className="mt-12">
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {t.bibliographyTitle}
              </h2>

              <p className="mb-5 text-sm leading-7 text-slate-600">
                {t.bibliographyNote}
              </p>

              <ol className="list-decimal space-y-4 ps-6 text-sm leading-7 text-slate-700">
                {bibliography.map((reference, index) => (
                  <li key={index}>{reference}</li>
                ))}
              </ol>
            </section>

            {/* Image Credits */}
            <section className="mt-12 rounded-xl border border-slate-200 bg-slate-100 p-5">
              <h2 className="mb-4 text-lg font-bold text-slate-900">
                {t.imageCreditsTitle}
              </h2>

              <ul className="space-y-3 text-xs leading-6 text-slate-600">
                {t.imageCredits.map((credit, index) => (
                  <li key={index}>
                    <span className="me-2 font-bold text-slate-800">
                      {index + 1}.
                    </span>
                    {credit}
                  </li>
                ))}
              </ul>
            </section>

            {/* Lesson Navigation */}
            <div className="mt-12 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2">
              <Link
                href="/academy/introduction-to-the-bible/lesson-2"
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 hover:shadow-sm"
              >
                <span className="block text-xs font-semibold text-slate-500">
                  {t.previousLesson}
                </span>

                <span className="mt-2 block font-bold text-blue-800">
                  {isUrdu
                    ? "سبق ۱: بائبل کا تعارف"
                    : "Lesson 1: Introduction to the Bible"}
                </span>
              </Link>

              <Link
                href="/academy/introduction-to-the-bible"
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 hover:shadow-sm"
              >
                <span className="block text-xs font-semibold text-slate-500">
                  {t.courseHome}
                </span>

                <span className="mt-2 block font-bold text-blue-800">
                  {t.backToCourse}
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-xs leading-6 text-slate-500">
          <p className="font-semibold">{t.footer}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} Bible Aur Hum Ministries
          </p>
        </footer>
      </div>
    </main>
  );
}
