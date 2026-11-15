"use client";

import { useState } from "react";
import Link from "next/link";

type Language = "en" | "ur";

type Section = {
  title: string;
  paragraphs: string[];
  verses: string[];
};

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const content: Record<Language, {
  language: string;
  back: string;
  module: string;
  lesson: string;
  title: string;
  subtitle: string;
  duration: string;
  videoTitle: string;
  englishVideo: string;
  urduVideo: string;
  videoNotice: string;
  objectives: string;
  objectivesList: string[];
  teaching: string;
  sections: Section[];
  keyPoint: string;
  keyText: string;
  terminology: string;
  terms: { term: string; meaning: string }[];
  references: string;
  quiz: string;
  quizIntro: string;
  questions: Question[];
  submit: string;
  score: string;
  correct: string;
  retry: string;
  reflection: string;
  reflectionList: string[];
  bibliography: string;
  bibliographyList: string[];
  next: string;
  nextNotice: string;
  footer: string;
  answerRequired: string;
}> = {
  en: {
    language: "English",
    back: "Back to Course",
    module: "MODULE 1 · INTRODUCTION TO THE BIBLE",
    lesson: "LESSON 1",
    title: "What Is the Bible?",
    subtitle: "Discover the Bible as a collection of sacred writings, its historical formation, literary diversity, central message, and significance for Christian faith.",
    duration: "Estimated study time: 2–3 hours",
    videoTitle: "Video Lectures",
    englishVideo: "English Video Lecture",
    urduVideo: "Urdu Video Lecture",
    videoNotice: "Video lecture will be added here when the recording is ready.",
    objectives: "Learning Objectives",
    objectivesList: [
      "Describe the Bible as a collection of writings formed and transmitted across many centuries.",
      "Identify the broad structure of the Old Testament and New Testament and recognize differences among Christian canons.",
      "Recognize major biblical literary genres and explain why genre and historical context matter.",
      "Outline major periods in the biblical world and distinguish historical evidence from theological interpretation.",
      "Explain Christian beliefs about inspiration and authority while recognizing differences among Christian traditions.",
      "Describe major themes in the biblical story and use basic principles of responsible Bible study."
    ],
    teaching: "Lesson Teaching",
    sections: [
      {
        title: "1. What Is the Bible? — A Library of Sacred Writings",
        paragraphs: [
          "The Bible is the collection of writings that Christians receive as Holy Scripture. It is not a single book written at one time by one author. It is a library of texts composed, edited, collected, copied, translated, and interpreted across many centuries. Its writings emerged in particular communities and historical settings in the ancient Near East and the eastern Mediterranean.",
          "The collection includes different kinds of literature: narratives, laws, poems, prayers, wisdom sayings, prophetic speeches, Gospels, letters, and apocalyptic visions. These writings do not all communicate in the same way. A poem uses imagery; a law gives covenant instructions; a letter addresses a particular community; and a narrative tells a story. Readers therefore need to ask what kind of text they are reading and what it was communicating in its original setting.",
          "For Christians, the Bible is sacred Scripture and a foundational witness to God's relationship with humanity. Academic study also examines its languages, historical settings, literary forms, manuscripts, and reception. These approaches need not be confused: a historical observation, a scholarly interpretation, and a theological conviction are related but distinct kinds of claims."
        ],
        verses: ["2 Timothy 3:16–17", "Psalm 119:105", "Luke 24:27"]
      },
      {
        title: "2. How the Bible Came to Us",
        paragraphs: [
          "The Bible's formation involved several processes that should be distinguished. First, traditions and memories were shared orally. Some were later written down. Individual books took shape through composition and, in some cases, editing or the combination of earlier materials. Communities then copied, circulated, read, and preserved these writings. Over time, Jewish and Christian communities recognized collections of texts as authoritative Scripture. Composition, transmission, and the recognition of a canon are connected processes, but they are not the same event.",
          "The biblical writings were copied by hand for centuries. Ancient writing materials included papyrus and parchment; texts could be written on scrolls and later commonly gathered in codex form, with pages bound along one edge. Copying by hand sometimes produced differences between manuscripts, including spelling variations, word order changes, omissions, and additions. Textual criticism compares manuscript evidence in order to assess the earliest recoverable wording. A textual variant does not automatically change the central message of a passage.",
          "The New Testament writings arose in the first-century world of the Roman Empire. Paul's letters are among the earliest surviving Christian writings and predate the written Gospels. The Gospels present accounts of Jesus' ministry, death, and resurrection, while Acts and the letters witness to the development and teaching of early Christian communities. The dates and stages of composition of individual books remain subjects of scholarly discussion."
        ],
        verses: ["Luke 1:1–4", "1 Corinthians 15:3–8", "2 Peter 3:15–16"]
      },
      {
        title: "3. Old Testament, New Testament, and the Biblical Canon",
        paragraphs: [
          "The Christian Bible is commonly arranged in two major parts. The Old Testament contains Israel's Scriptures, which are also sacred to Judaism. The New Testament contains writings central to Christian faith, including the four Gospels, Acts, apostolic letters, and Revelation. The word canon refers to the collection of writings a religious community recognizes as authoritative Scripture.",
          "The number and arrangement of Old Testament books differ among Jewish and Christian traditions. The Jewish Tanakh is organized as Torah (Instruction or Law), Nevi'im (Prophets), and Ketuvim (Writings). Protestant Bibles generally count 39 Old Testament books and 27 New Testament books, making 66. Catholic Bibles generally count 46 Old Testament books and 27 New Testament books, making 73; the additional Old Testament books are often called Deuterocanonical. Orthodox churches receive a broader Old Testament collection whose exact contents and numbering can vary by tradition. The New Testament collection of 27 books is shared across the major Christian traditions.",
          "These differences should be described accurately and respectfully. They reflect different histories of reception, liturgical use, and judgments about authoritative books. The Old Testament order in Christian Bibles also differs from the order of the Tanakh, even where the basic books overlap. When discussing the canon, specify which community or tradition is being described rather than assuming that every Bible has exactly the same table of contents."
        ],
        verses: ["Luke 24:44", "Romans 3:1–2", "2 Timothy 3:15"]
      },
      {
        title: "4. Biblical Literary Genres",
        paragraphs: [
          "A literary genre is a recognizable kind or form of writing. Genre helps readers understand how a text communicates. Biblical narrative tells stories about people and events; law presents commands and covenant instruction; poetry uses parallelism, metaphor, and vivid imagery; wisdom literature reflects on faithful and skillful living; and prophecy communicates messages associated with particular historical situations and often calls people back to covenant faithfulness.",
          "The New Testament includes Gospels, which proclaim and interpret the significance of Jesus; Acts, which narrates the early Christian movement; epistles, which address communities and individuals; and apocalyptic literature, which uses symbolic visions to speak about divine judgment, hope, and the ultimate triumph of God. Parables are a teaching form found especially in the Gospels. A single biblical book may combine more than one genre, so these categories are helpful guides rather than rigid boxes.",
          "Interpretation should take account of genre, literary context, historical setting, and the purpose of a passage. A proverb is not necessarily an unconditional promise for every circumstance. A poetic image should not automatically be read as literal description. Apocalyptic symbols should not be treated as though they were ordinary newspaper reporting. Responsible reading asks what the text's form would have communicated to its first audiences before considering its significance today."
        ],
        verses: ["Psalm 1", "Proverbs 1:1–7", "Isaiah 1:1–20", "Mark 4:1–34", "Revelation 1:1–3"]
      },
      {
        title: "5. Historical Periods and the World of the Bible",
        paragraphs: [
          "The Bible emerged in the world of the ancient Near East and the eastern Mediterranean. Its historical settings involved societies and empires such as Egypt, Assyria, Babylonia, Persia, Greece, and Rome. Their political systems, trade routes, languages, laws, religious practices, and cultural traditions provide important background for reading biblical texts. The Hittites and other neighboring peoples also appear in the wider historical and literary world of the Old Testament.",
          "A broad outline of the Old Testament world includes traditions about the ancestors of Israel; the Exodus and wilderness traditions; settlement and the period of the judges; the monarchy associated with Saul, David, and Solomon; the divided kingdoms; the Assyrian conquest of Samaria around 722/721 BCE; the Babylonian conquest of Jerusalem and destruction of the First Temple in 587/586 BCE; and the Persian period after Cyrus conquered Babylon in 539 BCE. The Second Temple was completed around 515 BCE. The precise dates and historical reconstruction of some earlier events, including the patriarchal narratives and Exodus, remain debated.",
          "The later biblical world includes the Hellenistic period following Alexander's conquest of the region in 332 BCE, the Maccabean revolt beginning in 167 BCE, and Roman control of the region from 63 BCE. Jesus and the earliest Christian communities lived under Roman rule. The Jerusalem Temple was destroyed by Roman forces in 70 CE. These events help explain the political, social, and religious contexts of many New Testament writings. Historical evidence can illuminate a text, but historical reconstruction and theological interpretation should not be treated as identical."
        ],
        verses: ["2 Kings 17:5–23", "2 Kings 25:1–12", "Ezra 1:1–4", "Mark 1:1–15", "Luke 3:1–2"]
      },
      {
        title: "6. Inspiration, Authority, and the Central Message of Scripture",
        paragraphs: [
          "Christians traditionally confess that Scripture is inspired by God while also acknowledging the human authors, languages, literary forms, and historical circumstances through which the biblical writings came to us. Second Timothy 3:16 uses the Greek term theopneustos, commonly translated “God-breathed.” Second Peter 1:20–21 speaks of people speaking from God as they were carried along by the Holy Spirit. These passages are important foundations for Christian teaching about inspiration, although Christians explain the nature of inspiration in different ways.",
          "Theological discussions use terms such as verbal inspiration (attention to the words of Scripture), plenary inspiration (the inspiration of Scripture as a whole), and organic or dynamic accounts (which emphasize the Spirit's work through real human authors and their circumstances). These labels summarize theological positions; they are not a substitute for reading each biblical book carefully. Christians also differ in how they describe scriptural authority. Many Protestant traditions emphasize sola Scriptura, while Catholic teaching understands Scripture and apostolic Tradition together, interpreted within the Church's teaching office. Orthodox traditions understand Scripture within the life and Holy Tradition of the Church. These descriptions are introductory and do not capture every nuance within each tradition.",
          "Across its diverse books, the Bible tells an overarching story that Christians commonly describe through creation, human disobedience and brokenness, covenant, Israel's story, the life and ministry of Jesus, his death and resurrection, the formation of the Church, and the hope of God's renewed creation. Christians understand Jesus Christ as central to God's saving work. The Bible has also deeply influenced worship, ethics, art, literature, law, education, and public life across many cultures. Its influence has been significant and complex, including both constructive contributions and contested uses throughout history.",
          "To study Scripture responsibly, read passages in their literary and historical contexts, compare related passages carefully, identify the genre, consult reliable translations and scholarly resources, and distinguish what the text says from what an interpreter concludes. Christian devotional reading may also include prayer and reflection. Careful study and spiritual engagement can support one another when readers are honest about evidence, context, and interpretation."
        ],
        verses: ["Genesis 1–3", "Genesis 12:1–3", "2 Timothy 3:16–17", "2 Peter 1:20–21", "Luke 24:44–49", "Revelation 21:1–5"]
      }
    ],
    keyPoint: "Key Point to Remember",
    keyText: "The Bible is a diverse collection of sacred writings formed and transmitted across centuries. Christians receive it as Scripture and read its many voices as a witness to God's purposes, with Jesus Christ at the centre of the Christian story.",
    terminology: "Key Terms",
    terms: [
      { term: "Bible", meaning: "A collection of sacred writings; the Christian Scriptures." },
      { term: "Canon", meaning: "The collection of writings recognized by a community as authoritative Scripture." },
      { term: "Tanakh", meaning: "The Jewish Scriptures arranged as Torah, Nevi'im, and Ketuvim." },
      { term: "Apocrypha / Deuterocanonical", meaning: "Terms used differently across traditions for certain books associated with the Old Testament collection." },
      { term: "Manuscript", meaning: "A document copied or written by hand." },
      { term: "Textual criticism", meaning: "The scholarly comparison of manuscripts to assess the earliest recoverable wording of a text." },
      { term: "Genre", meaning: "A recognizable literary form, such as narrative, poetry, law, Gospel, or letter." },
      { term: "Inspiration", meaning: "The Christian belief that Scripture is given through the work of the Holy Spirit." },
      { term: "Theopneustos", meaning: "A Greek term in 2 Timothy 3:16 commonly translated “God-breathed.”" },
      { term: "Hermeneutics", meaning: "The study and practice of interpretation." }
    ],
    references: "Key Bible References",
    quiz: "Knowledge Check",
    quizIntro: "Choose the best answer for each question. You must answer all ten questions before submitting.",
    questions: [
      { question: "What does the Greek plural word biblia mean?", options: ["One story", "Books or scrolls", "A prayer", "A prophecy"], answer: 1, explanation: "Biblia is a Greek plural form meaning books; the word came to be used for the collection of biblical writings." },
      { question: "Which statement best describes how the Bible came to us?", options: ["It was written at one time by one author.", "It was formed through composition, transmission, and recognition of collections.", "It was first printed in the ancient world.", "Every book was written in the same century."], answer: 1, explanation: "The Bible's formation involved distinct processes over many centuries, including composition, copying, circulation, and canon recognition." },
      { question: "What does the term canon mean in this lesson?", options: ["A translation method", "A list of kings", "A community's recognized collection of authoritative Scripture", "A type of manuscript material"], answer: 2, explanation: "Canon refers to the collection of writings a religious community recognizes as authoritative Scripture." },
      { question: "How many books are in the Protestant Bible?", options: ["66", "73", "27", "39"], answer: 0, explanation: "Protestant Bibles generally contain 39 Old Testament books and 27 New Testament books, totaling 66." },
      { question: "What are the three divisions of the Jewish Tanakh?", options: ["Gospels, Acts, Letters", "Law, Kings, Psalms", "Torah, Nevi'im, Ketuvim", "Creation, Covenant, Church"], answer: 2, explanation: "The Tanakh is organized as Torah, Nevi'im, and Ketuvim." },
      { question: "Why is recognizing literary genre important?", options: ["It removes the need for context.", "It helps readers understand how a passage communicates.", "It makes every passage literal.", "It proves all books have the same style."], answer: 1, explanation: "Genre helps readers interpret a passage according to its literary form and communicative purpose." },
      { question: "Which empire conquered Jerusalem and destroyed the First Temple in 587/586 BCE?", options: ["Persian", "Greek", "Roman", "Babylonian"], answer: 3, explanation: "The Babylonian conquest of Jerusalem and destruction of the First Temple occurred in 587/586 BCE." },
      { question: "What is textual criticism?", options: ["The comparison of manuscripts to assess a text's wording", "A method of writing poetry", "A list of Bible translations", "A type of sermon"], answer: 0, explanation: "Textual criticism compares manuscript evidence to assess the earliest recoverable wording." },
      { question: "Which Greek term in 2 Timothy 3:16 is commonly translated “God-breathed”?", options: ["Logos", "Theopneustos", "Agape", "Ekklesia"], answer: 1, explanation: "Theopneustos is the Greek term used in 2 Timothy 3:16 and commonly rendered “God-breathed.”" },
      { question: "Which approach is most responsible when interpreting a biblical passage?", options: ["Use a verse without its surrounding context.", "Assume every genre works in the same way.", "Consider literary genre, historical setting, and context.", "Ignore manuscript and translation questions."], answer: 2, explanation: "Responsible interpretation considers context, genre, historical setting, and the wording of the passage." }
    ],
    submit: "Submit Answers",
    score: "Your Result",
    correct: "Correct answers",
    retry: "Try Again",
    reflection: "Reflection Questions",
    reflectionList: [
      "How does understanding the Bible as a library of writings change the way you approach its different books?",
      "Why is it important to distinguish the formation of biblical books from the later recognition of a canon?",
      "How can awareness of literary genre prevent misunderstanding a biblical passage?",
      "What can historical background contribute to the study of the Old and New Testaments, and what are its limits?",
      "How can Christians combine careful interpretation with prayer, faith, and practical discipleship?"
    ],
    bibliography: "Selected Academic Reading",
    bibliographyList: [
      "Alter, Robert. The Art of Biblical Narrative. Revised and updated edition. New York: Basic Books, 2011.",
      "Barton, John. The Nature of Biblical Criticism. Louisville, KY: Westminster John Knox Press, 2007.",
      "Fee, Gordon D., and Douglas Stuart. How to Read the Bible for All Its Worth. 4th ed. Grand Rapids, MI: Zondervan, 2014.",
      "Gorman, Michael J. Elements of Biblical Exegesis: A Basic Guide for Students and Ministers. 3rd ed. Grand Rapids, MI: Baker Academic, 2020.",
      "Grabbe, Lester L. Ancient Israel: What Do We Know and How Do We Know It? Revised ed. London: T&T Clark, 2017.",
      "Grabbe, Lester L. An Introduction to Second Temple Judaism. London: T&T Clark, 2010.",
      "Hays, Richard B. Reading Backwards: Figural Christology and the Fourfold Gospel Witness. Waco, TX: Baylor University Press, 2014.",
      "Riches, John. The World of Jesus: First-Century Judaism in Crisis. Cambridge: Cambridge University Press, 1990.",
      "Vanhoozer, Kevin J. The Drama of Doctrine: A Canonical-Linguistic Approach to Christian Theology. Louisville, KY: Westminster John Knox Press, 2005.",
      "Webster, John. Holy Scripture: A Dogmatic Sketch. Cambridge: Cambridge University Press, 2003."
    ],
    next: "Next Lesson",
    nextNotice: "Lesson 2 will be available soon.",
    footer: "Bible Aur Hum Academy · Certificate in Biblical Studies",
    answerRequired: "Please answer all ten questions before submitting."
  },
  ur: {
    language: "اردو",
    back: "کورس پر واپس جائیں",
    module: "ماڈیول 1 · بائبل کا تعارف",
    lesson: "سبق 1",
    title: "بائبل کیا ہے؟",
    subtitle: "بائبل کو مقدس تحریروں کے مجموعے، اس کی تاریخی تشکیل، ادبی تنوع، مرکزی پیغام اور مسیحی ایمان میں اس کی اہمیت کے حوالے سے جانیں۔",
    duration: "مطالعے کا متوقع وقت: 2 سے 3 گھنٹے",
    videoTitle: "ویڈیو لیکچرز",
    englishVideo: "انگریزی ویڈیو لیکچر",
    urduVideo: "اردو ویڈیو لیکچر",
    videoNotice: "ریکارڈنگ مکمل ہونے پر ویڈیو لیکچر یہاں شامل کیا جائے گا۔",
    objectives: "تعلیمی مقاصد",
    objectivesList: [
      "بائبل کو کئی صدیوں میں مرتب اور منتقل ہونے والی تحریروں کے مجموعے کے طور پر بیان کریں۔",
      "عہدِ قدیم اور عہدِ جدید کی عمومی ترتیب اور مسیحی روایات میں کینن کے فرق کو پہچانیں۔",
      "بائبل کی اہم ادبی اصناف اور صنف و تاریخی سیاق و سباق کی اہمیت کو سمجھیں۔",
      "بائبل کی دنیا کے اہم تاریخی ادوار کا خاکہ بیان کریں اور تاریخی شواہد کو الٰہیاتی تشریح سے الگ پہچانیں۔",
      "الہام اور اختیارِ صحائف کے بارے میں مسیحی عقائد بیان کریں اور مختلف مسیحی روایات کے فرق کو پہچانیں۔",
      "بائبل کی کہانی کے اہم موضوعات بیان کریں اور ذمہ دارانہ مطالعے کے بنیادی اصول استعمال کریں۔"
    ],
    teaching: "سبق کی تعلیم",
    sections: [
      {
        title: "1۔ بائبل کیا ہے؟ — مقدس تحریروں کا مجموعہ",
        paragraphs: [
          "بائبل اُن تحریروں کا مجموعہ ہے جنہیں مسیحی کلامِ مقدس تسلیم کرتے ہیں۔ یہ ایسی ایک کتاب نہیں جو ایک ہی وقت میں ایک ہی مصنف نے لکھی ہو۔ یہ مختلف تحریروں کا مجموعہ ہے جو کئی صدیوں کے دوران قدیم مشرقِ قریب اور مشرقی بحیرۂ روم کے مخصوص تاریخی حالات میں لکھی، مرتب، جمع، نقل، ترجمہ اور سمجھی گئیں۔",
          "اس مجموعے میں مختلف ادبی اصناف شامل ہیں: تاریخی بیانات، قوانین، نظمیں، دعائیں، حکمت کی باتیں، انبیائی پیغامات، اناجیل، خطوط اور مکاشفاتی رویا۔ یہ تمام اصناف ایک ہی انداز میں بات نہیں کرتیں۔ شاعری میں تصویری زبان اور تشبیہات ہوتی ہیں؛ شریعت میں عہد سے متعلق ہدایات ہوتی ہیں؛ خط کسی خاص جماعت سے مخاطب ہوتا ہے؛ اور تاریخی بیان واقعات و کرداروں کی کہانی پیش کرتا ہے۔ اس لیے قاری کو پہلے یہ سمجھنا چاہیے کہ وہ کس قسم کی تحریر پڑھ رہا ہے۔",
          "مسیحیوں کے لیے بائبل مقدس صحائف اور انسانیت کے ساتھ خدا کے تعلق کی بنیادی گواہی ہے۔ علمی مطالعہ اس کی زبانوں، تاریخی ماحول، ادبی اصناف، مخطوطات اور بعد کی تفہیم کا بھی جائزہ لیتا ہے۔ تاریخی مشاہدہ، علمی تشریح اور الٰہیاتی عقیدہ ایک دوسرے سے متعلق ضرور ہیں، لیکن یہ دعووں کی الگ الگ اقسام ہیں۔"
        ],
        verses: ["2 تیمتھیس 3:16–17", "زبور 119:105", "لوقا 24:27"]
      },
      {
        title: "2۔ بائبل ہم تک کیسے پہنچی؟",
        paragraphs: [
          "بائبل کی تشکیل میں کئی مراحل شامل تھے جن میں فرق کرنا ضروری ہے۔ ابتدا میں روایات اور یادداشتیں زبانی طور پر منتقل ہوئیں۔ ان میں سے بعض بعد میں لکھی گئیں۔ انفرادی کتابیں تصنیف ہوئیں اور بعض صورتوں میں پہلے سے موجود مواد کی تدوین یا ترتیب بھی کی گئی۔ اس کے بعد مختلف جماعتوں نے ان تحریروں کو نقل کیا، پھیلایا، پڑھا اور محفوظ رکھا۔ وقت کے ساتھ یہودی اور مسیحی جماعتوں نے بعض مجموعوں کو مستند مقدس صحائف کے طور پر تسلیم کیا۔ تصنیف، نقل و ترسیل اور کینن کی شناخت باہم متعلق ہیں، لیکن ایک ہی عمل نہیں ہیں۔",
          "بائبل کی تحریریں کئی صدیوں تک ہاتھ سے نقل کی جاتی رہیں۔ قدیم زمانے میں پاپائرس اور چمڑے سے تیار کردہ پارچمنٹ استعمال ہوتے تھے۔ تحریریں طوماروں پر لکھی جاتی تھیں اور بعد میں صفحات کو ایک کنارے سے باندھ کر مخطوطے کی صورت میں بھی محفوظ کیا جانے لگا۔ ہاتھ سے نقل کرنے کے دوران مختلف نسخوں میں املا، الفاظ کی ترتیب، حذف یا اضافے جیسے فرق پیدا ہو سکتے تھے۔ متنی تنقید مختلف مخطوطات کا تقابل کرکے متن کی قدیم ترین قابلِ بازیافت عبارت کا جائزہ لیتی ہے۔ ہر متنی فرق لازماً کسی عبارت کے مرکزی پیغام کو تبدیل نہیں کرتا۔",
          "عہدِ جدید کی تحریریں رومی سلطنت کے پہلی صدی کے ماحول میں سامنے آئیں۔ پولس رسول کے خطوط قدیم ترین محفوظ مسیحی تحریروں میں شامل ہیں اور تحریری اناجیل سے پہلے کے ہیں۔ اناجیل یسوع کی خدمت، موت اور قیامت کے واقعات پیش کرتی ہیں، جبکہ اعمال اور رسولوں کے خطوط ابتدائی مسیحی جماعتوں کی ترقی اور تعلیمات کی گواہی دیتے ہیں۔ انفرادی کتابوں کی تاریخِ تصنیف اور تشکیل کے مراحل پر اہلِ علم میں بحث جاری ہے۔"
        ],
        verses: ["لوقا 1:1–4", "1 کرنتھیوں 15:3–8", "2 پطرس 3:15–16"]
      },
      {
        title: "3۔ عہدِ قدیم، عہدِ جدید اور بائبل کا کینن",
        paragraphs: [
          "مسیحی بائبل عموماً دو بڑے حصوں میں تقسیم کی جاتی ہے۔ عہدِ قدیم میں بنی اسرائیل کے صحائف شامل ہیں، جنہیں یہودیت میں بھی مقدس سمجھا جاتا ہے۔ عہدِ جدید میں وہ تحریریں شامل ہیں جو مسیحی ایمان کے لیے بنیادی اہمیت رکھتی ہیں، مثلاً چار اناجیل، اعمال، رسولوں کے خطوط اور مکاشفہ۔ کینن سے مراد وہ تحریری مجموعہ ہے جسے کوئی مذہبی جماعت مستند مقدس صحائف تسلیم کرتی ہے۔",
          "عہدِ قدیم کی کتابوں کی تعداد اور ترتیب یہودی اور مسیحی روایات میں مختلف ہے۔ یہودی تنخ تین حصوں پر مشتمل ہے: توراہ، نبیئیم اور کتوویم۔ پروٹسٹنٹ بائبل میں عموماً عہدِ قدیم کی 39 اور عہدِ جدید کی 27 کتابیں، یعنی کل 66 کتابیں ہوتی ہیں۔ کیتھولک بائبل میں عموماً عہدِ قدیم کی 46 اور عہدِ جدید کی 27 کتابیں، یعنی کل 73 کتابیں ہوتی ہیں؛ اضافی عہدِ قدیم کی کتابوں کو اکثر قانونی ثانی یا Deuterocanonical کہا جاتا ہے۔ آرتھوڈوکس کلیسیاؤں میں عہدِ قدیم کا مجموعہ نسبتاً وسیع ہے، تاہم اس کی تفصیلات اور گنتی مختلف روایات میں بدل سکتی ہے۔ عہدِ جدید کی 27 کتابیں بڑی مسیحی روایات میں مشترک ہیں۔",
          "ان فرقوں کو درست اور احترام کے ساتھ بیان کرنا چاہیے۔ ان کے پیچھے کتابوں کی قبولیت، عبادتی استعمال اور مستند صحائف کے بارے میں تاریخی فیصلوں کی مختلف روایات موجود ہیں۔ مسیحی بائبل میں عہدِ قدیم کی ترتیب بھی تنخ سے مختلف ہے، اگرچہ بنیادی کتابوں کا بڑا حصہ مشترک ہے۔ کینن پر گفتگو کرتے وقت واضح کریں کہ کس جماعت یا روایت کا ذکر ہو رہا ہے۔"
        ],
        verses: ["لوقا 24:44", "رومیوں 3:1–2", "2 تیمتھیس 3:15"]
      },
      {
        title: "4۔ بائبل کی ادبی اصناف",
        paragraphs: [
          "ادبی صنف سے مراد تحریر کی پہچانی جانے والی قسم یا انداز ہے۔ صنف قاری کو یہ سمجھنے میں مدد دیتی ہے کہ عبارت اپنا پیغام کس طرح پیش کرتی ہے۔ بائبل کی تاریخی کہانیاں لوگوں اور واقعات کا بیان کرتی ہیں؛ شریعت احکام اور عہد کی ہدایات دیتی ہے؛ شاعری میں متوازی مصرعے، استعارے اور مؤثر تصویری زبان استعمال ہوتی ہے؛ حکمت کی کتابیں وفادار اور دانشمندانہ زندگی پر غور کرتی ہیں؛ اور نبوت مخصوص تاریخی حالات میں خدا کا پیغام پیش کرتی ہے اور لوگوں کو عہد کی وفاداری کی طرف بلاتی ہے۔",
          "عہدِ جدید میں اناجیل شامل ہیں جو یسوع کی زندگی اور اہمیت کا اعلان اور بیان کرتی ہیں؛ اعمال ابتدائی مسیحی تحریک کی تاریخ پیش کرتی ہے؛ خطوط جماعتوں اور افراد سے مخاطب ہوتے ہیں؛ اور مکاشفاتی ادب علامتی رویا کے ذریعے خدا کے فیصلے، امید اور آخری فتح کی بات کرتا ہے۔ تمثیلیں تعلیم دینے کا ایک انداز ہیں جو خاص طور پر اناجیل میں ملتا ہے۔ ایک ہی کتاب میں ایک سے زیادہ ادبی اصناف بھی ہو سکتی ہیں، اس لیے یہ تقسیم رہنمائی کے لیے ہے، سخت خانے نہیں۔",
          "تشریح میں ادبی صنف، عبارت کا سیاق و سباق، تاریخی ماحول اور مقصد سامنے رکھنا چاہیے۔ امثال کی ہر بات لازماً ہر حالت کے لیے غیر مشروط وعدہ نہیں ہوتی۔ شاعرانہ تصویر کو فوراً لفظی بیان نہیں سمجھنا چاہیے۔ مکاشفاتی علامتوں کو عام اخباری رپورٹ کی طرح نہیں پڑھنا چاہیے۔ ذمہ دارانہ مطالعہ پہلے یہ پوچھتا ہے کہ عبارت اپنی پہلی سامعین سے کیا بات کر رہی تھی، پھر اس کی آج کے لیے اہمیت پر غور کرتا ہے۔"
        ],
        verses: ["زبور 1", "امثال 1:1–7", "یسعیاہ 1:1–20", "مرقس 4:1–34", "مکاشفہ 1:1–3"]
      },
      {
        title: "5۔ تاریخی ادوار اور بائبل کی دنیا",
        paragraphs: [
          "بائبل قدیم مشرقِ قریب اور مشرقی بحیرۂ روم کی دنیا میں وجود میں آئی۔ اس کے تاریخی ماحول میں مصر، اسور، بابل، فارس، یونان اور روم جیسی سلطنتیں اور معاشرے شامل تھے۔ ان کے سیاسی نظام، تجارتی راستے، زبانیں، قوانین، مذہبی رسوم اور ثقافتی روایات بائبل کو سمجھنے کے لیے اہم پس منظر فراہم کرتی ہیں۔ حِتّی اور دوسرے ہمسایہ لوگ بھی عہدِ قدیم کی وسیع تاریخی اور ادبی دنیا میں نظر آتے ہیں۔",
          "عہدِ قدیم کی دنیا کا ایک عمومی خاکہ اسرائیل کے آباؤ اجداد سے متعلق روایات؛ خروج اور بیابان کی روایات؛ آبادکاری اور قاضیوں کا دور؛ ساؤل، داؤد اور سلیمان سے منسوب بادشاہت؛ منقسم سلطنتیں؛ تقریباً 722/721 قبل مسیح میں اسوریوں کے ہاتھوں سامریہ کی فتح؛ 587/586 قبل مسیح میں بابلیوں کے ہاتھوں یروشلیم کی فتح اور پہلے ہیکل کی تباہی؛ اور 539 قبل مسیح میں کورش کی طرف سے بابل کی فتح کے بعد فارسی دور پر مشتمل ہے۔ دوسرا ہیکل تقریباً 515 قبل مسیح میں مکمل ہوا۔ ابتدائی واقعات، مثلاً آباؤ اجداد اور خروج کی تاریخی تفصیلات، پر اہلِ علم میں بحث موجود ہے۔",
          "بعد کے دور میں 332 قبل مسیح میں سکندر کی فتوحات کے بعد یونانی یا ہیلینستی دور، 167 قبل مسیح میں شروع ہونے والی مکابی بغاوت، اور 63 قبل مسیح سے خطے پر رومی اقتدار شامل ہیں۔ یسوع اور ابتدائی مسیحی جماعتیں رومی حکومت کے زمانے میں رہتی تھیں۔ 70 عیسوی میں رومی فوجوں نے یروشلیم کے ہیکل کو تباہ کر دیا۔ یہ واقعات عہدِ جدید کی تحریروں کے سیاسی، سماجی اور مذہبی پس منظر کو سمجھنے میں مدد دیتے ہیں۔ تاریخی شواہد متن کو روشن کر سکتے ہیں، لیکن تاریخی تشکیلِ نو اور الٰہیاتی تشریح ایک ہی چیز نہیں ہیں۔"
        ],
        verses: ["2 سلاطین 17:5–23", "2 سلاطین 25:1–12", "عزرا 1:1–4", "مرقس 1:1–15", "لوقا 3:1–2"]
      },
      {
        title: "6۔ الہام، صحائف کا اختیار اور بائبل کا مرکزی پیغام",
        paragraphs: [
          "مسیحی روایت کے مطابق کلامِ مقدس خدا کے الہام سے ہے، اور ساتھ ہی اس بات کو بھی تسلیم کرتی ہے کہ بائبل کی تحریریں حقیقی انسانی مصنفین، زبانوں، ادبی انداز اور تاریخی حالات کے ذریعے ہم تک پہنچی ہیں۔ 2 تیمتھیس 3:16 میں یونانی لفظ theopneustos استعمال ہوا ہے، جس کا عام ترجمہ “خدا کے دم سے” یا “خدا کے الہام سے” کیا جاتا ہے۔ 2 پطرس 1:20–21 میں بیان ہے کہ لوگ روح القدس کے وسیلہ سے خدا کی طرف سے بولے۔ یہ آیات مسیحی عقیدۂ الہام کی اہم بنیادیں ہیں، اگرچہ مسیحی الہام کی نوعیت کی وضاحت مختلف انداز سے کرتے ہیں۔",
          "الٰہیاتی گفتگو میں لفظی الہام، کلی الہام، اور عضوی یا متحرک الہام جیسی اصطلاحات استعمال ہوتی ہیں۔ یہ اصطلاحات صحائف کے الفاظ، مجموعی حیثیت اور انسانی مصنفین کے ذریعے روح القدس کے کام پر مختلف زور دیتی ہیں۔ یہ علمی و الٰہیاتی موقفوں کے خلاصے ہیں، ہر کتاب کے محتاط مطالعے کا متبادل نہیں۔ مسیحی روایات صحائف کے اختیار کو بھی مختلف انداز سے بیان کرتی ہیں۔ کئی پروٹسٹنٹ روایات sola Scriptura یعنی صحائف کی بنیادی حاکمیت پر زور دیتی ہیں؛ کیتھولک تعلیم صحائف اور رسولی روایت کو کلیسیا کی مجاز تعلیم کے ساتھ سمجھتی ہے؛ جبکہ آرتھوڈوکس روایات صحائف کو کلیسیا کی زندگی اور مقدس روایت کے اندر سمجھتی ہیں۔ یہ تعارفی وضاحتیں ہیں اور ہر روایت کی تمام باریکیوں کا احاطہ نہیں کرتیں۔",
          "بائبل کی مختلف کتابوں میں ایک وسیع کہانی سامنے آتی ہے جسے مسیحی عموماً تخلیق، انسانی نافرمانی اور ٹوٹ پھوٹ، عہد، اسرائیل کی تاریخ، یسوع کی زندگی اور خدمت، اُس کی موت اور قیامت، کلیسیا کی تشکیل، اور خدا کی نئی تخلیق کی امید کے مراحل سے بیان کرتے ہیں۔ مسیحی یسوع مسیح کو خدا کے نجات بخش کام کا مرکز سمجھتے ہیں۔ بائبل نے عبادت، اخلاقیات، فن، ادب، قانون، تعلیم اور عوامی زندگی پر بھی گہرا اثر ڈالا ہے۔ تاریخ میں اس کا اثر وسیع اور پیچیدہ رہا ہے، جس میں تعمیری خدمات کے ساتھ بعض متنازع استعمال بھی شامل ہیں۔",
          "صحائف کے ذمہ دارانہ مطالعے کے لیے عبارت کو اس کے ادبی اور تاریخی سیاق و سباق میں پڑھیں، متعلقہ حوالوں کا احتیاط سے تقابل کریں، ادبی صنف پہچانیں، معتبر تراجم اور علمی وسائل سے مدد لیں، اور متن کے بیان اور مفسر کے نتیجے میں فرق کریں۔ مسیحی روحانی مطالعے میں دعا اور غور و فکر بھی شامل ہو سکتے ہیں۔ جب شواہد، سیاق و سباق اور تشریح کے بارے میں دیانت داری اختیار کی جائے تو علمی مطالعہ اور روحانی وابستگی ایک دوسرے کی مدد کر سکتے ہیں۔"
        ],
        verses: ["پیدائش 1–3", "پیدائش 12:1–3", "2 تیمتھیس 3:16–17", "2 پطرس 1:20–21", "لوقا 24:44–49", "مکاشفہ 21:1–5"]
      }
    ],
    keyPoint: "یاد رکھنے کی اہم بات",
    keyText: "بائبل مقدس تحریروں کا ایک متنوع مجموعہ ہے جو کئی صدیوں کے دوران مرتب اور منتقل ہوا۔ مسیحی اسے کلامِ مقدس تسلیم کرتے ہیں اور اس کی مختلف آوازوں میں خدا کے مقاصد کی گواہی دیکھتے ہیں، جبکہ مسیحی کہانی کے مرکز میں یسوع مسیح ہیں۔",
    terminology: "اہم اصطلاحات",
    terms: [
      { term: "بائبل", meaning: "مقدس تحریروں کا مجموعہ؛ مسیحی صحائف۔" },
      { term: "کینن", meaning: "وہ تحریری مجموعہ جسے کوئی جماعت مستند مقدس صحائف تسلیم کرتی ہے۔" },
      { term: "تنخ", meaning: "یہودی صحائف، جن کی ترتیب توراہ، نبیئیم اور کتوویم ہے۔" },
      { term: "اپوکریفا / قانونی ثانی", meaning: "وہ اصطلاحات جو مختلف روایات میں عہدِ قدیم سے متعلق بعض کتابوں کے لیے مختلف انداز سے استعمال ہوتی ہیں۔" },
      { term: "مخطوطہ", meaning: "ہاتھ سے لکھی یا نقل کی گئی دستاویز۔" },
      { term: "متنی تنقید", meaning: "مخطوطات کا تقابل کرکے متن کی قدیم ترین قابلِ بازیافت عبارت کا جائزہ لینے کا علمی طریقہ۔" },
      { term: "ادبی صنف", meaning: "تحریر کی پہچانی جانے والی قسم، مثلاً تاریخی بیان، شاعری، شریعت، انجیل یا خط۔" },
      { term: "الہام", meaning: "مسیحی عقیدہ کہ صحائف روح القدس کے کام کے وسیلہ سے عطا ہوئے۔" },
      { term: "تھیوپنئوسٹوس", meaning: "2 تیمتھیس 3:16 میں آنے والا یونانی لفظ، جس کا عام ترجمہ “خدا کے دم سے” ہے۔" },
      { term: "علمِ تفسیر", meaning: "متن کو سمجھنے اور اس کی تشریح کرنے کا مطالعہ اور عمل۔" }
    ],
    references: "اہم بائبل حوالہ جات",
    quiz: "علم کا جائزہ",
    quizIntro: "ہر سوال کے لیے بہترین جواب منتخب کریں۔ جمع کرنے سے پہلے تمام دس سوالات کے جواب دینا ضروری ہے۔",
    questions: [
      { question: "یونانی جمع لفظ biblia کے کیا معنی ہیں؟", options: ["ایک کہانی", "کتابیں یا طومار", "ایک دعا", "ایک نبوت"], answer: 1, explanation: "Biblia یونانی جمع لفظ ہے جس کے معنی کتابیں ہیں؛ بعد میں یہ بائبل کی تحریروں کے مجموعے کے لیے استعمال ہونے لگا۔" },
      { question: "بائبل ہم تک پہنچنے کے عمل کی بہترین وضاحت کون سی ہے؟", options: ["یہ ایک ہی وقت میں ایک مصنف نے لکھی۔", "یہ تصنیف، نقل و ترسیل اور مجموعوں کی شناخت کے مراحل سے بنی۔", "یہ قدیم زمانے میں چھاپی گئی۔", "اس کی ہر کتاب ایک ہی صدی میں لکھی گئی۔"], answer: 1, explanation: "بائبل کی تشکیل میں کئی صدیوں کے دوران تصنیف، نقل، ترسیل اور کینن کی شناخت جیسے الگ الگ مراحل شامل تھے۔" },
      { question: "اس سبق میں کینن سے کیا مراد ہے؟", options: ["ترجمے کا طریقہ", "بادشاہوں کی فہرست", "مستند صحائف کے طور پر تسلیم کیا گیا مجموعہ", "مخطوطے کا مواد"], answer: 2, explanation: "کینن وہ تحریری مجموعہ ہے جسے کوئی مذہبی جماعت مستند مقدس صحائف تسلیم کرتی ہے۔" },
      { question: "پروٹسٹنٹ بائبل میں عموماً کتنی کتابیں ہوتی ہیں؟", options: ["66", "73", "27", "39"], answer: 0, explanation: "پروٹسٹنٹ بائبل میں عموماً عہدِ قدیم کی 39 اور عہدِ جدید کی 27 کتابیں ہوتی ہیں، یعنی کل 66۔" },
      { question: "یہودی تنخ کے تین حصے کون سے ہیں؟", options: ["اناجیل، اعمال، خطوط", "شریعت، بادشاہ، زبور", "توراہ، نبیئیم، کتوویم", "تخلیق، عہد، کلیسیا"], answer: 2, explanation: "تنخ کی ترتیب توراہ، نبیئیم اور کتوویم پر مشتمل ہے۔" },
      { question: "ادبی صنف کو پہچاننا کیوں اہم ہے؟", options: ["اس سے سیاق و سباق کی ضرورت ختم ہو جاتی ہے۔", "اس سے سمجھنے میں مدد ملتی ہے کہ عبارت اپنا پیغام کیسے دیتی ہے۔", "اس سے ہر عبارت لفظی بن جاتی ہے۔", "اس سے ثابت ہوتا ہے کہ تمام کتابوں کا انداز ایک جیسا ہے۔"], answer: 1, explanation: "ادبی صنف عبارت کی شکل اور مقصد کے مطابق اس کی تشریح میں مدد دیتی ہے۔" },
      { question: "587/586 قبل مسیح میں کس سلطنت نے یروشلیم فتح کرکے پہلے ہیکل کو تباہ کیا؟", options: ["فارسی", "یونانی", "رومی", "بابلی"], answer: 3, explanation: "بابلیوں نے 587/586 قبل مسیح میں یروشلیم فتح کیا اور پہلے ہیکل کو تباہ کیا۔" },
      { question: "متنی تنقید کیا ہے؟", options: ["متن کی عبارت جانچنے کے لیے مخطوطات کا تقابل", "شاعری لکھنے کا طریقہ", "بائبل کے تراجم کی فہرست", "وعظ کی ایک قسم"], answer: 0, explanation: "متنی تنقید مخطوطات کے شواہد کا تقابل کرکے متن کی قدیم ترین قابلِ بازیافت عبارت کا جائزہ لیتی ہے۔" },
      { question: "2 تیمتھیس 3:16 میں کون سا یونانی لفظ عموماً “خدا کے دم سے” ترجمہ ہوتا ہے؟", options: ["لوگوس", "تھیوپنئوسٹوس", "اگاپے", "ایکلیسیا"], answer: 1, explanation: "تھیوپنئوسٹوس 2 تیمتھیس 3:16 کا یونانی لفظ ہے جس کا عام ترجمہ “خدا کے دم سے” ہے۔" },
      { question: "بائبل کی عبارت کی ذمہ دارانہ تشریح کے لیے کون سا طریقہ بہتر ہے؟", options: ["آیت کو اردگرد کے سیاق سے الگ استعمال کریں۔", "فرض کریں کہ ہر ادبی صنف ایک ہی انداز میں کام کرتی ہے۔", "ادبی صنف، تاریخی ماحول اور سیاق و سباق کو سامنے رکھیں۔", "مخطوطات اور تراجم کے سوالات کو نظر انداز کریں۔"], answer: 2, explanation: "ذمہ دارانہ تشریح میں سیاق و سباق، ادبی صنف، تاریخی ماحول اور عبارت کے الفاظ کو سامنے رکھا جاتا ہے۔" }
    ],
    submit: "جوابات جمع کریں",
    score: "آپ کا نتیجہ",
    correct: "درست جوابات",
    retry: "دوبارہ کوشش کریں",
    reflection: "غور و فکر کے سوالات",
    reflectionList: [
      "بائبل کو مختلف تحریروں کے مجموعے کے طور پر سمجھنا آپ کے مطالعے کے انداز کو کیسے بدلتا ہے؟",
      "بائبل کی کتابوں کی تصنیف اور بعد میں کینن کی شناخت کے فرق کو سمجھنا کیوں ضروری ہے؟",
      "ادبی صنف کی پہچان بائبل کی کسی عبارت کو غلط سمجھنے سے کیسے بچا سکتی ہے؟",
      "تاریخی پس منظر عہدِ قدیم اور عہدِ جدید کے مطالعے میں کیا مدد دیتا ہے، اور اس کی حدود کیا ہیں؟",
      "مسیحی محتاط علمی تشریح کو دعا، ایمان اور عملی شاگردی کے ساتھ کیسے جوڑ سکتے ہیں؟"
    ],
    bibliography: "منتخب علمی مطالعہ",
    bibliographyList: [
      "Alter, Robert. The Art of Biblical Narrative. Revised and updated edition. New York: Basic Books, 2011.",
      "Barton, John. The Nature of Biblical Criticism. Louisville, KY: Westminster John Knox Press, 2007.",
      "Fee, Gordon D., and Douglas Stuart. How to Read the Bible for All Its Worth. 4th ed. Grand Rapids, MI: Zondervan, 2014.",
      "Gorman, Michael J. Elements of Biblical Exegesis: A Basic Guide for Students and Ministers. 3rd ed. Grand Rapids, MI: Baker Academic, 2020.",
      "Grabbe, Lester L. Ancient Israel: What Do We Know and How Do We Know It? Revised ed. London: T&T Clark, 2017.",
      "Grabbe, Lester L. An Introduction to Second Temple Judaism. London: T&T Clark, 2010.",
      "Hays, Richard B. Reading Backwards: Figural Christology and the Fourfold Gospel Witness. Waco, TX: Baylor University Press, 2014.",
      "Riches, John. The World of Jesus: First-Century Judaism in Crisis. Cambridge: Cambridge University Press, 1990.",
      "Vanhoozer, Kevin J. The Drama of Doctrine: A Canonical-Linguistic Approach to Christian Theology. Louisville, KY: Westminster John Knox Press, 2005.",
      "Webster, John. Holy Scripture: A Dogmatic Sketch. Cambridge: Cambridge University Press, 2003."
    ],
    next: "اگلا سبق",
    nextNotice: "سبق 2 جلد دستیاب ہوگا۔",
    footer: "بائبل اور ہم اکیڈمی · بائبل اسٹڈیز میں سرٹیفکیٹ",
    answerRequired: "جمع کرنے سے پہلے تمام دس سوالات کے جواب دیں۔"
  }
};

export default function LessonOnePage() {
  const [language, setLanguage] = useState<Language>("en");
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const t = content[language];
  const isUrdu = language === "ur";

  const score = t.questions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0),
    0
  );

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setAnswers([]);
    setSubmitted(false);
  }

  function submitQuiz() {
    if (answers.length !== t.questions.length || answers.some((answer) => answer < 0)) {
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
      className="min-h-screen bg-slate-50 text-slate-800"
    >
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/academy/introduction-to-the-bible"
            className="font-semibold text-blue-700 hover:text-blue-900"
          >
            ← {t.back}
          </Link>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                language === "en"
                  ? "bg-blue-700 text-white"
                  : "border border-slate-300 bg-white"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => changeLanguage("ur")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                language === "ur"
                  ? "bg-blue-700 text-white"
                  : "border border-slate-300 bg-white"
              }`}
            >
              اردو
            </button>
          </div>
        </div>

        <header className="mb-8 rounded-3xl bg-slate-900 px-6 py-12 text-center text-white sm:px-12">
          <p className="mb-4 text-sm font-bold tracking-widest text-blue-300">{t.module}</p>
          <p className="mb-3 text-sm font-semibold text-blue-200">{t.lesson}</p>
          <h1 className="text-3xl font-extrabold sm:text-5xl">{t.title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
            {t.subtitle}
          </p>
          <p className="mt-6 text-sm text-slate-300">{t.duration}</p>
        </header>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">{t.videoTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[t.englishVideo, t.urduVideo].map((title) => (
              <div key={title} className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">
                <h3 className="mb-3 font-bold">{title}</h3>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-slate-900 px-4 text-center text-sm text-white">
                  {t.videoNotice}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">{t.objectives}</h2>
          <ul className="space-y-3">
            {t.objectivesList.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <span className="font-bold text-green-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">{t.teaching}</h2>
          <div className="space-y-5">
            {t.sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="mb-4 text-xl font-bold text-blue-900">{section.title}</h3>
                <div className="space-y-4 leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="mb-2 text-sm font-bold text-slate-600">{t.references}</p>
                  <div className="flex flex-wrap gap-2">
                    {section.verses.map((verse) => (
                      <span key={verse} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                        {verse}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-amber-900">{t.keyPoint}</h2>
          <p className="leading-8 text-amber-950">{t.keyText}</p>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">{t.terminology}</h2>
          <dl className="space-y-4">
            {t.terms.map((item) => (
              <div key={item.term} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <dt className="font-bold text-blue-900">{item.term}</dt>
                <dd className="mt-1 leading-7 text-slate-700">{item.meaning}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">{t.quiz}</h2>
          <p className="mb-6 text-slate-600">{t.quizIntro}</p>
          <div className="space-y-8">
            {t.questions.map((question, questionIndex) => (
              <div key={question.question}>
                <h3 className="mb-4 font-bold leading-7">
                  {questionIndex + 1}. {question.question}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const selected = answers[questionIndex] === optionIndex;
                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={submitted}
                        onClick={() => {
                          const updated = [...answers];
                          updated[questionIndex] = optionIndex;
                          setAnswers(updated);
                        }}
                        className={`rounded-xl border p-4 text-start transition ${
                          selected
                            ? "border-blue-600 bg-blue-50 text-blue-900"
                            : "border-slate-200 bg-white hover:border-blue-400"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <div className={`mt-3 rounded-lg p-3 text-sm leading-7 ${
                    answers[questionIndex] === question.answer
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}>
                    {answers[questionIndex] === question.answer ? "✓ " : "✗ "}
                    {question.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>

          {!submitted ? (
            <button
              type="button"
              onClick={submitQuiz}
              className="mt-8 w-full rounded-xl bg-blue-700 px-6 py-4 font-bold text-white hover:bg-blue-800"
            >
              {t.submit}
            </button>
          ) : (
            <div className="mt-8 rounded-xl bg-blue-50 p-6 text-center">
              <h3 className="text-xl font-bold text-blue-900">{t.score}</h3>
              <p className="mt-3 text-3xl font-extrabold text-blue-700">
                {score} / {t.questions.length}
              </p>
              <p className="mt-2 text-slate-700">{t.correct}: {score}</p>
              <button
                type="button"
                onClick={resetQuiz}
                className="mt-5 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
              >
                {t.retry}
              </button>
            </div>
          )}
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">{t.reflection}</h2>
          <ol className="list-decimal space-y-4 ps-6 leading-8">
            {t.reflectionList.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">{t.bibliography}</h2>
          <ol className="list-decimal space-y-3 ps-6 text-sm leading-7 text-slate-700">
            {t.bibliographyList.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ol>
          <p className="mt-5 text-xs leading-6 text-slate-500">
            Bibliographic details are presented as the course's selected reading list. Consult the cited editions for full publication and page details when preparing formal footnotes.
          </p>
        </section>

        <section className="rounded-2xl bg-slate-900 p-7 text-center text-white">
          <h2 className="text-2xl font-bold">{t.next}</h2>
          <p className="mt-3 text-slate-300">{t.nextNotice}</p>
          <p className="mt-6 text-sm text-slate-400">{t.footer}</p>
        </section>
      </div>
    </main>
  );
}
