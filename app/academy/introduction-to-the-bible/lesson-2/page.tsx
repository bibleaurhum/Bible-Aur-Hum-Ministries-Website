
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
    title: "Lesson 2: How the Bible Came to Us",
    subtitle:
      "Discover the languages, manuscripts, scribes, historical discoveries, and translation work through which the biblical text has been transmitted.",
    duration: "Estimated study time: 25–35 minutes",
    backToCourse: "Back to the Course",
    learningObjectivesTitle: "Learning Objectives",
    learningObjectives: [
      "Understand that the Bible was written and collected over many centuries rather than delivered as one completed volume.",
      "Identify the principal languages and writing materials associated with the biblical books.",
      "Explain the role of ancient scribes and the importance of manuscript comparison.",
      "Describe the significance of the Dead Sea Scrolls and major early biblical codices.",
      "Recognize the contribution of ancient translations, printing, and modern Bible translation.",
      "Distinguish historical evidence from theological conclusions about Scripture.",
    ],
    introductionTitle: "Introduction: A Book with a Long History",
    introduction: [
      "The Bible is one of the most influential collections of writings in human history. It has shaped religious belief, worship, literature, ethics, art, education, and public life across many cultures. Yet the Bible did not arrive in the modern world as one book written at one time by one person. It came to us through a long and complex history of composition, collection, copying, preservation, translation, and publication.",
      "The biblical books were written by different authors in different historical settings. They include narrative, poetry, law, prophecy, wisdom literature, letters, and accounts of the life and teaching of Jesus. These writings were produced over many centuries and were eventually recognized and collected as the Scriptures of Jewish and Christian communities.",
      "Studying this history does not require a person to abandon faith. Rather, it helps readers understand the historical processes through which biblical writings were transmitted. It also encourages careful reading, intellectual honesty, and appreciation for the work of generations who copied, studied, translated, and preserved these texts.",
    ],
    sectionsLabel: "Study Section",
    sections: [
      {
        title: "1. The Bible Was Written Over Many Centuries",
        paragraphs: [
          "The Bible is a library of books rather than a single literary work. The books of the Old Testament, also called the Hebrew Bible in Jewish tradition, emerged in different periods and settings. Their composition and editing histories are subjects of ongoing scholarly discussion. Many biblical writings were produced or developed during the first millennium BC, although proposed dates differ according to the book, its sources, and the method of interpretation.",
          "The New Testament writings belong to the first century AD. They include the four Gospels, Acts, letters associated with apostles and early Christian leaders, and Revelation. These writings arose within the earliest Christian communities and were composed in the historical and cultural world of the Roman Empire.",
          "The collection of biblical books was not formed in a single meeting. Jewish communities preserved and recognized their Scriptures over time. Early Christians read Israel's Scriptures alongside writings about Jesus and the apostles. The recognition of the New Testament collection also developed over time, through worship, teaching, copying, and discussion among Christian communities.",
        ],
        points: [
          "The Bible contains writings from different authors and historical settings.",
          "The dates of individual books are not all agreed upon by scholars.",
          "The formation and recognition of the biblical collections took place over time.",
        ],
      },
      {
        title: "2. The Languages of the Bible",
        paragraphs: [
          "Most of the Old Testament was written in Hebrew. Hebrew was the principal language of ancient Israel and Judah and is closely connected with the cultural and religious life reflected in these writings.",
          "Some portions of the Old Testament were written in Aramaic. Aramaic became widely used in the ancient Near East. Parts of Daniel and Ezra contain Aramaic passages. This reminds us that the biblical writings emerged in a multilingual world.",
          "The books of the New Testament were written in Greek, specifically the common form of Greek widely used in the eastern Mediterranean world. This language helped the early Christian message circulate among communities in different regions.",
          "When readers use an English or Urdu Bible today, they are usually reading a translation from the biblical languages, or a translation based on modern editions of those ancient-language texts. Translation is therefore an important part of the history of how the Bible reached readers around the world.",
        ],
        points: [
          "Hebrew: the principal language of the Old Testament.",
          "Aramaic: found in portions of the Old Testament.",
          "Greek: the language in which the New Testament books were written.",
        ],
      },
      {
        title: "3. Papyrus, Parchment, and Ancient Writing",
        paragraphs: [
          "The physical materials used for writing in the ancient world were different from modern paper. Two important materials were papyrus and parchment.",
          "Papyrus was made from the pith of the papyrus plant, which grew especially in Egypt and other wet regions. Strips were laid in layers, pressed, dried, and prepared as a writing surface. Papyrus was widely used in the ancient Mediterranean world. It could be assembled into sheets and joined to form a scroll.",
          "Parchment was prepared from animal skin. It was processed and stretched to create a durable writing surface. A prepared skin could be folded into leaves and gathered into a book form known as a codex. The codex eventually became an important format for biblical manuscripts.",
          "Writing materials were valuable, and producing a manuscript required time, skill, and resources. A handwritten copy was not produced with a printing machine. Each copy had to be written by hand, which made the work of scribes essential to the transmission of biblical texts.",
        ],
        points: [
          "Papyrus was made from a plant material and was commonly used for scrolls.",
          "Parchment was prepared from animal skin and could be used in codices.",
          "A codex is an early book format made of folded leaves gathered together.",
        ],
      },
      {
        title: "4. Scribes and the Copying of Manuscripts",
        paragraphs: [
          "Before printing became widespread, biblical manuscripts were copied by hand. Scribes were trained individuals who carefully reproduced texts. Their work helped preserve and circulate religious writings across generations and geographical regions.",
          "Copying a manuscript was demanding. A scribe had to follow the exemplar, or manuscript being copied, while working with handwritten letters, abbreviations, corrections, and sometimes damaged or difficult passages. Many scribes worked with considerable care, although copying by hand could also introduce differences.",
          "Manuscript differences are often called textual variants. Some are spelling differences, changes in word order, or minor differences that do not significantly affect meaning. Others involve the presence, absence, or wording of a phrase or passage. Such differences can arise through accidental copying mistakes, visual confusion, repeated wording, or deliberate editorial decisions.",
          "Textual criticism is the scholarly discipline that compares surviving manuscripts and other textual witnesses to assess the earliest recoverable wording of a text. It does not mean criticizing the Bible in an ordinary negative sense. It is a method of studying how a written text was transmitted and identifying the evidence behind its wording.",
          "A responsible reader should neither exaggerate nor hide manuscript differences. The existence of variants is a normal feature of handwritten transmission. Scholars examine the age, geographical distribution, relationships, and quality of manuscripts, as well as the language and context of a reading. The evidence must be assessed carefully rather than reduced to slogans.",
        ],
        points: [
          "Scribes copied biblical writings by hand before printing.",
          "Textual variants are differences among manuscript copies.",
          "Textual criticism compares evidence to assess the earliest recoverable text.",
        ],
      },
      {
        title: "5. The Dead Sea Scrolls: A Remarkable Discovery",
        paragraphs: [
          "One of the most important discoveries for the study of ancient Jewish writings took place near the Dead Sea. Beginning in 1947, manuscripts and manuscript fragments were discovered in caves in the region of Qumran. Further discoveries and archaeological investigations followed.",
          "The collection known as the Dead Sea Scrolls includes biblical manuscripts, other Jewish religious writings, and documents connected with the life and beliefs of the communities that produced or preserved them. The manuscripts date from several centuries before Christ through the first century AD.",
          "The scrolls are especially valuable because they provide ancient witnesses to the text of books found in the Hebrew Bible. Before their discovery, scholars relied on later surviving Hebrew manuscript traditions for much of their textual evidence. The Dead Sea manuscripts made it possible to compare biblical texts with witnesses that are many centuries older than the medieval manuscripts previously available.",
          "The Great Isaiah Scroll is among the best-known discoveries. It preserves a nearly complete copy of the book of Isaiah and is generally dated to around the second century BC. Comparison with later Hebrew copies reveals both substantial continuity and some differences in wording and spelling. This evidence allows scholars to study the history of the text in a more informed way.",
          "The Dead Sea Scrolls should not be described as proving that every manuscript was identical or that no copying differences ever occurred. Their importance is more precise: they provide early and varied evidence that helps scholars understand the transmission of Jewish Scriptures.",
        ],
        points: [
          "The discoveries began in 1947 near Qumran.",
          "The collection includes biblical and non-biblical Jewish manuscripts.",
          "The Great Isaiah Scroll is an important early witness to the book of Isaiah.",
          "The scrolls provide evidence for studying both continuity and variation in the text.",
        ],
      },
      {
        title: "6. Codex Vaticanus and Codex Sinaiticus",
        paragraphs: [
          "Among the most important surviving early Christian biblical manuscripts are Codex Vaticanus and Codex Sinaiticus. Both are generally dated to the fourth century AD and contain extensive portions of the Greek Bible.",
          "Codex Vaticanus is preserved in the Vatican Library. It is an important witness to the Greek Old Testament and New Testament. Its text has been studied extensively by scholars because of its age and the quality of its manuscript evidence.",
          "Codex Sinaiticus was discovered in the nineteenth century at Saint Catherine's Monastery in the Sinai region. It is one of the earliest substantial Christian biblical codices and contains much of the Greek Old Testament and a nearly complete New Testament, along with additional early Christian writings.",
          "These codices are valuable not because they are identical in every detail, but because they provide important evidence from an early period in the history of the Christian Bible. Their differences and agreements with other manuscripts help scholars reconstruct the history of the biblical text.",
          "The study of these manuscripts demonstrates the importance of preserving historical documents and making them available for careful academic examination.",
        ],
        points: [
          "Both codices are generally dated to the fourth century AD.",
          "Vaticanus is preserved in the Vatican Library.",
          "Sinaiticus is associated with Saint Catherine's Monastery in Sinai.",
          "Both are important witnesses to the early Greek biblical text.",
        ],
      },
      {
        title: "7. The Septuagint and the Latin Vulgate",
        paragraphs: [
          "As Jewish communities spread and Greek became widely used, there was a growing need for Scripture in Greek. The ancient Greek translation of Jewish Scriptures is known as the Septuagint, often abbreviated LXX. Its translation began with the Torah in Alexandria, traditionally associated with the third century BC. Other books were translated or revised over subsequent generations.",
          "The Septuagint became especially important among Greek-speaking Jewish communities and later among many early Christians. New Testament writers sometimes quote wording that is close to the Greek Old Testament. The Septuagint is therefore significant for the study of early Jewish and Christian interpretation.",
          "Another major translation in Christian history was the Latin Vulgate. Jerome undertook important work translating and revising biblical texts into Latin in the late fourth and early fifth centuries AD. His work became highly influential in Western Christianity for many centuries.",
          "These translations remind us that the Bible's history includes more than the copying of Hebrew and Greek manuscripts. It also includes the work of translators who sought to communicate Scripture to readers in languages they understood. Translation requires careful attention to vocabulary, grammar, historical context, and the meaning of the original text.",
        ],
        points: [
          "The Septuagint is an ancient Greek translation of Jewish Scriptures.",
          "Its translation began with the Torah and developed over time.",
          "Jerome's Latin translation and revision work contributed to the Vulgate.",
          "Ancient translations are important witnesses to the history of biblical interpretation and transmission.",
        ],
      },
      {
        title: "8. Gutenberg and the Printing of the Bible",
        paragraphs: [
          "For many centuries, biblical books were copied by hand. This made the production of books slow and expensive. A major change took place in Europe during the fifteenth century with the development of printing using movable metal type.",
          "Johannes Gutenberg's printed Latin Bible, produced around 1454–1455, is one of the most famous early European printed books. It is commonly known as the Gutenberg Bible. Its production marked an important moment in the history of printing and book culture.",
          "Printing made it possible to produce multiple copies of a text more efficiently than copying each one by hand. It did not instantly make books available to everyone, and early printed books remained costly. Nevertheless, printing helped change the scale and speed of book production and contributed to the spread of learning.",
          "During the sixteenth century and later, Bible translation and printing expanded in many languages. Translators and publishers worked in different cultural and religious contexts. In the modern period, advances in scholarship, manuscript study, printing, and digital technology have made biblical texts and research resources more accessible.",
        ],
        points: [
          "The Gutenberg Bible was printed around 1454–1455.",
          "Movable-type printing transformed the production of books in Europe.",
          "Printing helped biblical texts circulate more widely.",
          "Bible translation continues in many languages today.",
        ],
      },
      {
        title: "9. Modern Bible Translation and Responsible Reading",
        paragraphs: [
          "Today, the Bible is available in thousands of languages and language varieties, although translation and revision work continues. Translation teams may include biblical-language scholars, linguists, editors, and representatives of the communities who will use the translation.",
          "Different translations sometimes use different approaches. A more formal translation may aim to reflect the structure and wording of the source languages closely. A more meaning-focused translation may use natural expressions in the receiving language to communicate the sense of the original. Each approach involves decisions, and no translation method removes the need for careful study.",
          "Readers should consider the translation's purpose, its translation philosophy, the quality of its scholarship, and the notes or introductions supplied by its editors. Comparing more than one reliable translation can help readers notice important details, but comparison should be guided by context rather than by isolated words.",
          "Historical study and Christian faith are not necessarily opponents. Historical research can clarify what evidence exists, how manuscripts relate to one another, and how translations developed. Theological interpretation asks further questions about the meaning, authority, and significance of Scripture within the life of faith. These questions are related, but they are not identical.",
          "A thoughtful student approaches the Bible with reverence and intellectual honesty. This means reading passages in context, examining evidence, acknowledging uncertainty where it exists, and avoiding claims that go beyond what the sources can demonstrate.",
        ],
        points: [
          "Bible translation continues as languages and communities change.",
          "Translations may use different approaches to communicate the source text.",
          "Comparing reliable translations can help clarify meaning.",
          "Historical evidence should be described accurately and not exaggerated.",
        ],
      },
    ],
    imagesTitle: "Historical Manuscripts and Writing",
    imagesNote:
      "These images illustrate materials, manuscripts, and developments discussed in this lesson.",
    timelineTitle: "A Brief Historical Timeline",
    timelineNote:
      "Dates are approximate. The composition and editing dates of individual biblical books remain subjects of scholarly discussion. The dates below describe broad historical periods, not a universally agreed chronology for every book.",
    scriptureTitle: "Scripture for Further Study",
    scriptureNote:
      "Read each passage in its literary and historical context. These references connect the lesson's themes with biblical reflection on Scripture, teaching, and the transmission of writings.",
    scriptures: [
      {
        reference: "Deuteronomy 31:24–26",
        explanation:
          "Moses completes writing the words of the law and gives instructions for preserving the written testimony.",
      },
      {
        reference: "Jeremiah 36:1–4",
        explanation:
          "Jeremiah dictates his words to Baruch, who writes them on a scroll.",
      },
      {
        reference: "Luke 1:1–4",
        explanation:
          "Luke describes his careful investigation and orderly account of events concerning Jesus.",
      },
      {
        reference: "Romans 15:4",
        explanation:
          "Paul reflects on the continuing instructional value of what was written beforehand.",
      },
      {
        reference: "2 Timothy 3:14–17",
        explanation:
          "Paul emphasizes the value of the sacred writings for teaching and formation.",
      },
      {
        reference: "2 Peter 3:15–16",
        explanation:
          "Peter refers to Paul's letters and recognizes that some passages require careful understanding.",
      },
    ],
    termsTitle: "Key Academic Terms",
    terms: [
      {
        term: "Manuscript",
        definition:
          "A document written by hand rather than produced through modern printing.",
      },
      {
        term: "Scribe",
        definition:
          "A person trained to write or copy documents by hand.",
      },
      {
        term: "Papyrus",
        definition:
          "A writing material made from the pith of the papyrus plant.",
      },
      {
        term: "Parchment",
        definition:
          "A writing surface prepared from animal skin.",
      },
      {
        term: "Codex",
        definition:
          "A book format consisting of leaves gathered and bound together.",
      },
      {
        term: "Textual Variant",
        definition:
          "A difference in wording or form between manuscript witnesses of a text.",
      },
      {
        term: "Textual Criticism",
        definition:
          "The scholarly comparison of textual witnesses to assess the earliest recoverable wording.",
      },
      {
        term: "Septuagint",
        definition:
          "The ancient Greek translation of Jewish Scriptures, produced over time.",
      },
      {
        term: "Vulgate",
        definition:
          "The influential Latin biblical translation associated especially with Jerome's work.",
      },
      {
        term: "Translation",
        definition:
          "The communication of a text's meaning from one language into another.",
      },
    ],
    keyPointsTitle: "Key Points to Remember",
    keyPoints: [
      "The Bible is a collection of writings produced in different historical settings.",
      "Hebrew, Aramaic, and Greek are the principal biblical languages.",
      "Papyrus and parchment were important ancient writing materials.",
      "Scribes copied manuscripts by hand, and manuscript copying could produce textual variants.",
      "Textual criticism studies manuscript evidence carefully and systematically.",
      "The Dead Sea Scrolls provide important early witnesses to Jewish Scriptures.",
      "Codex Vaticanus and Codex Sinaiticus are significant fourth-century biblical manuscripts.",
      "The Septuagint and Latin Vulgate played important roles in the history of Bible translation.",
      "The Gutenberg Bible represents a major development in European printing.",
      "Modern Bible translation continues to make Scripture accessible to people around the world.",
    ],
    quizTitle: "Knowledge Check: Lesson 2",
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
      "Why is it important to understand that the Bible contains writings produced by different authors in different historical settings?",
      "What do the Dead Sea Scrolls contribute to our understanding of the history and transmission of the Hebrew Scriptures?",
      "What can we learn from the work of ancient scribes about the value and challenges of preserving written texts?",
      "How should a thoughtful reader respond when different biblical manuscripts or translations contain differences in wording?",
      "How can historical study deepen our appreciation of Scripture while encouraging careful and responsible interpretation?",
    ],
    bibliographyTitle: "Academic Bibliography",
    bibliographyNote:
      "These works provide further academic reading on biblical manuscripts, textual criticism, and the history of transmission.",
    imageCreditsTitle: "Image Credits and Acknowledgements",
    imageCredits: [
      "Great Isaiah Scroll: Photograph by Ardon Bar Hama; author of the original document unknown. Public domain, via Wikimedia Commons.",
"Papyrus and parchment: AI-generated educational illustration created with ChatGPT.",
"Dead Sea Scrolls at the Jordan Museum: Photograph by D-Stanley (David Stanley), licensed under CC BY 2.0, via Wikimedia Commons.",
"Codex Vaticanus: Photograph of a public-domain manuscript; author unknown. Public Domain Mark 1.0, via Wikimedia Commons.",
"Codex Sinaiticus: Photograph by PotatoCow25, released under CC0, via Wikimedia Commons.",
"Gutenberg printing press: AI-generated educational illustration created with ChatGPT.",
    ],
    previousLesson: "Previous Lesson",
    nextLesson: "Next Lesson",
    courseHome: "Course Home",
    footer:
      "Bible Aur Hum Academy | Certificate in Biblical Studies",
  },
  ur: {
    title: "سبق ۲: بائبل ہم تک کیسے پہنچی؟",
    subtitle:
      "بائبل کی زبانوں، قدیم قلمی نسخوں، کاتبوں، تاریخی دریافتوں اور تراجم کی تاریخ کا مطالعہ کریں۔",
    duration: "متوقع مطالعے کا وقت: ۲۵ تا ۳۵ منٹ",
    backToCourse: "کورس پر واپس جائیں",
    learningObjectivesTitle: "تعلیمی مقاصد",
    learningObjectives: [
      "سمجھنا کہ بائبل ایک ہی وقت میں مکمل کتاب کی صورت میں نہیں لکھی گئی بلکہ کئی صدیوں میں اس کی تحریریں وجود میں آئیں اور جمع ہوئیں۔",
      "بائبل کی بنیادی زبانوں اور قدیم تحریری مواد کی شناخت کرنا۔",
      "قدیم کاتبوں کے کردار اور قلمی نسخوں کے تقابل کی اہمیت کو سمجھنا۔",
      "بحرِ مردار کے طوماروں اور قدیم بائبلی کوڈیکس کی تاریخی اہمیت بیان کرنا۔",
      "قدیم تراجم، طباعت اور جدید بائبل تراجم کی خدمات کو پہچاننا۔",
      "تاریخی شواہد اور کلامِ مقدس کے بارے میں الٰہیاتی نتائج میں فرق کرنا۔",
    ],
    introductionTitle: "تعارف: ایک طویل تاریخ رکھنے والی کتاب",
    introduction: [
      "بائبل انسانی تاریخ کے سب سے زیادہ اثرانداز ہونے والے مجموعۂ تحریرات میں سے ایک ہے۔ اس نے مختلف تہذیبوں اور معاشروں کے مذہبی عقائد، عبادت، ادب، اخلاقیات، فن، تعلیم اور اجتماعی زندگی پر گہرا اثر ڈالا ہے۔ لیکن بائبل جدید زمانے میں ایک ہی شخص کی لکھی ہوئی یا ایک ہی وقت میں مکمل ہونے والی کتاب کے طور پر نہیں پہنچی۔ یہ تحریروں کی تخلیق، جمع آوری، نقل، حفاظت، ترجمے اور اشاعت کے ایک طویل تاریخی عمل کے ذریعے ہم تک پہنچی ہے۔",
      "بائبل کی کتابیں مختلف مصنفین نے مختلف تاریخی حالات میں تحریر کیں۔ ان میں تاریخی بیانات، شاعری، شریعت، نبوت، حکمت کی تعلیمات، خطوط اور یسوع مسیح کی زندگی اور تعلیمات کے واقعات شامل ہیں۔ یہ تحریریں کئی صدیوں کے دوران وجود میں آئیں اور بعد میں یہودی اور مسیحی برادریوں کے مقدس صحائف کے طور پر جمع اور محفوظ ہوئیں۔",
      "اس تاریخ کا مطالعہ کرنے کا مطلب ایمان کو ترک کرنا نہیں ہے۔ بلکہ اس سے ہمیں یہ سمجھنے میں مدد ملتی ہے کہ بائبلی تحریریں کن تاریخی مراحل سے گزرتے ہوئے ہم تک پہنچیں۔ یہ مطالعہ ہمیں احتیاط، علمی دیانت داری اور ان نسلوں کی محنت کی قدر کرنا بھی سکھاتا ہے جنہوں نے ان تحریروں کو نقل کیا، پڑھا، ترجمہ کیا اور محفوظ رکھا۔",
    ],
    sections: [
      {
        title: "۱۔ بائبل کئی صدیوں میں لکھی گئی",
        paragraphs: [
          "بائبل ایک واحد ادبی تحریر نہیں بلکہ کتابوں کا ایک مجموعہ ہے۔ عہدِ قدیم، جسے یہودی روایت میں عبرانی بائبل بھی کہا جاتا ہے، کی کتابیں مختلف ادوار اور حالات میں وجود میں آئیں۔ ان کی تصنیف، تدوین اور ترتیب کی تاریخ آج بھی علمی تحقیق کا موضوع ہے۔ عہدِ قدیم کی بہت سی تحریریں پہلی ہزاری قبل مسیح کے دوران لکھی گئیں یا اپنی موجودہ صورت میں ترقی پذیر ہوئیں، تاہم ہر کتاب کے بارے میں محققین کی آراء یکساں نہیں ہیں۔",
          "عہدِ جدید کی تحریریں پہلی صدی عیسوی سے تعلق رکھتی ہیں۔ ان میں چار انجیلیں، اعمال، رسولوں اور ابتدائی مسیحی راہنماؤں سے منسوب خطوط اور مکاشفہ شامل ہیں۔ یہ تحریریں رومی سلطنت کے تاریخی اور ثقافتی ماحول میں ابتدائی مسیحی جماعتوں کے اندر وجود میں آئیں۔",
          "بائبل کی تمام کتابیں کسی ایک مجلس میں جمع نہیں کی گئیں۔ یہودی برادریوں نے اپنے مقدس صحائف کو وقت کے ساتھ محفوظ اور تسلیم کیا۔ ابتدائی مسیحی جماعتیں یسوع مسیح اور رسولوں سے متعلق تحریروں کے ساتھ عہدِ قدیم کے صحائف بھی پڑھتی تھیں۔ عہدِ جدید کی کتابوں کے مجموعے کی شناخت بھی عبادت، تعلیم، نقل اور مختلف مسیحی جماعتوں کے باہمی غور و فکر کے ذریعے بتدریج واضح ہوئی۔",
        ],
        points: [
          "بائبل مختلف مصنفین اور تاریخی حالات کی تحریروں پر مشتمل ہے۔",
          "ہر کتاب کی تاریخِ تصنیف کے بارے میں محققین متفق نہیں ہیں۔",
          "بائبلی کتابوں کے مجموعوں کی تشکیل اور شناخت وقت کے ساتھ ہوئی۔",
        ],
      },
      {
        title: "۲۔ بائبل کی زبانیں",
        paragraphs: [
          "عہدِ قدیم کا زیادہ تر حصہ عبرانی زبان میں لکھا گیا۔ عبرانی قدیم اسرائیل اور یہوداہ کی بنیادی زبان تھی اور ان تحریروں کی مذہبی اور ثقافتی زندگی سے گہرا تعلق رکھتی ہے۔",
          "عہدِ قدیم کے کچھ حصے ارامی زبان میں بھی لکھے گئے۔ قدیم مشرقِ قریب میں ارامی زبان وسیع پیمانے پر استعمال ہوتی تھی۔ دانی ایل اور عزرا کی کتابوں میں ارامی زبان کے حصے موجود ہیں۔ اس سے معلوم ہوتا ہے کہ بائبلی تحریریں ایک کثیراللسانی ماحول میں وجود میں آئیں۔",
          "عہدِ جدید کی کتابیں یونانی زبان میں لکھی گئیں۔ اس زمانے میں بحیرۂ روم کے مشرقی علاقوں میں عام طور پر استعمال ہونے والی یونانی زبان نے ابتدائی مسیحی پیغام کو مختلف علاقوں کی جماعتوں تک پہنچانے میں مدد دی۔",
          "آج جب ہم انگریزی یا اردو بائبل پڑھتے ہیں تو عموماً ہم بائبلی زبانوں کے متون یا ان متون کے جدید علمی نسخوں سے کیے گئے تراجم پڑھ رہے ہوتے ہیں۔ اس لیے ترجمہ بھی اس تاریخ کا ایک اہم حصہ ہے جس کے ذریعے بائبل دنیا کے مختلف لوگوں تک پہنچی۔",
        ],
        points: [
          "عبرانی: عہدِ قدیم کی بنیادی زبان۔",
          "ارامی: عہدِ قدیم کے بعض حصوں میں استعمال ہونے والی زبان۔",
          "یونانی: عہدِ جدید کی کتابوں کی زبان۔",
        ],
      },
      {
        title: "۳۔ پاپائرس، پارچمنٹ اور قدیم تحریری مواد",
        paragraphs: [
          "قدیم زمانے میں تحریر کے لیے جو مواد استعمال ہوتا تھا وہ آج کے کاغذ سے مختلف تھا۔ ان میں دو اہم مواد پاپائرس اور پارچمنٹ تھے۔",
          "پاپائرس ایک پودے کے اندرونی حصے سے تیار کیا جاتا تھا۔ اس کے باریک ٹکڑوں کو تہوں میں رکھ کر دبایا اور خشک کیا جاتا تھا تاکہ تحریر کے لیے سطح بن سکے۔ پاپائرس قدیم بحیرۂ روم کی دنیا میں عام تھا۔ اس سے صفحات تیار کیے جاتے اور انہیں جوڑ کر طومار بنایا جا سکتا تھا۔",
          "پارچمنٹ جانوروں کی کھال سے تیار کیا جاتا تھا۔ اسے صاف اور مخصوص طریقے سے تیار کرکے لکھنے کے قابل بنایا جاتا تھا۔ پارچمنٹ کے صفحات کو تہہ کرکے ایک کتابی شکل میں جمع کیا جا سکتا تھا جسے کوڈیکس کہتے ہیں۔ وقت کے ساتھ کوڈیکس بائبلی نسخوں کی ایک اہم شکل بن گیا۔",
          "قدیم تحریری مواد قیمتی تھا اور ایک قلمی نسخہ تیار کرنے کے لیے وقت، مہارت اور وسائل درکار ہوتے تھے۔ اس زمانے میں کتابیں مشین کے ذریعے چھاپی نہیں جاتی تھیں۔ ہر نقل ہاتھ سے لکھی جاتی تھی، اسی لیے کاتبوں کا کردار انتہائی اہم تھا۔",
        ],
        points: [
          "پاپائرس پودے سے تیار کیا جاتا تھا اور طوماروں میں استعمال ہوتا تھا۔",
          "پارچمنٹ جانوروں کی کھال سے تیار کیا جاتا تھا۔",
          "کوڈیکس کتاب کی ابتدائی شکل ہے جس میں صفحات کو جمع کیا جاتا تھا۔",
        ],
      },
      {
        title: "۴۔ کاتب اور قلمی نسخوں کی نقل",
        paragraphs: [
          "طباعت عام ہونے سے پہلے بائبلی تحریروں کے قلمی نسخے ہاتھ سے نقل کیے جاتے تھے۔ کاتب وہ تربیت یافتہ افراد تھے جو تحریروں کو ہاتھ سے لکھتے یا ان کی نقل تیار کرتے تھے۔ ان کی محنت نے مذہبی تحریروں کو مختلف نسلوں اور علاقوں تک پہنچانے میں مدد دی۔",
          "ایک قلمی نسخے کی نقل تیار کرنا آسان کام نہیں تھا۔ کاتب کو اصل یا نمونہ نسخے کو سامنے رکھ کر الفاظ، حروف، مختصر علامات اور بعض اوقات مشکل یا خراب حصوں کو سمجھتے ہوئے نقل تیار کرنا پڑتی تھی۔ بہت سے کاتب بڑی احتیاط سے کام کرتے تھے، لیکن ہاتھ سے نقل کرنے کے عمل میں اختلافات پیدا ہو سکتے تھے۔",
          "مختلف قلمی نسخوں کے درمیان پائے جانے والے الفاظ یا عبارت کے فرق کو متنی اختلافات کہا جاتا ہے۔ بعض اختلافات صرف املا، الفاظ کی ترتیب یا معمولی تبدیلیوں سے متعلق ہوتے ہیں۔ کچھ اختلافات میں کسی لفظ یا جملے کی موجودگی، عدم موجودگی یا اس کی عبارت کا فرق شامل ہو سکتا ہے۔ یہ فرق نقل کی غلطی، ملتے جلتے حروف، عبارت کی تکرار یا بعض اوقات تدوینی فیصلوں کے نتیجے میں پیدا ہو سکتے تھے۔",
          "متنی تنقید ایک علمی شعبہ ہے جس میں محققین مختلف قلمی نسخوں اور دیگر متنی شواہد کا تقابل کرکے کسی تحریر کے قدیم ترین قابلِ بازیافت متن کا تعین کرنے کی کوشش کرتے ہیں۔ اس اصطلاح کا مطلب عام معنوں میں بائبل پر منفی تنقید کرنا نہیں ہے۔ یہ اس بات کا علمی مطالعہ ہے کہ ایک تحریر کس طرح نقل ہو کر ہم تک پہنچی اور اس کے الفاظ کے بارے میں کیا شواہد موجود ہیں۔",
          "ذمہ دار قاری کو نہ تو قلمی نسخوں کے اختلافات کو بڑھا چڑھا کر بیان کرنا چاہیے اور نہ ہی انہیں چھپانا چاہیے۔ ہاتھ سے نقل کی جانے والی تحریروں میں متنی اختلافات کا پایا جانا ایک معروف تاریخی حقیقت ہے۔ محققین نسخوں کی تاریخ، جغرافیائی پھیلاؤ، باہمی تعلق، زبان اور سیاق و سباق کو دیکھتے ہیں۔ شواہد کا فیصلہ نعروں کے بجائے احتیاط اور علمی طریقے سے کرنا چاہیے۔",
        ],
        points: [
          "طباعت سے پہلے کاتب بائبلی تحریروں کو ہاتھ سے نقل کرتے تھے۔",
          "متنی اختلافات مختلف قلمی نسخوں میں عبارت کے فرق کو کہتے ہیں۔",
          "متنی تنقید قدیم ترین قابلِ بازیافت متن کے لیے شواہد کا تقابل کرتی ہے۔",
        ],
      },
      {
        title: "۵۔ بحرِ مردار کے طومار: ایک اہم تاریخی دریافت",
        paragraphs: [
          "قدیم یہودی تحریروں کے مطالعے کے لیے سب سے اہم دریافتوں میں سے ایک بحرِ مردار کے قریب ہوئی۔ ۱۹۴۷ء سے قمران کے علاقے کی غاروں میں قلمی نسخے اور ان کے ٹکڑے دریافت ہونا شروع ہوئے۔ اس کے بعد مزید دریافتیں اور آثارِ قدیمہ کی تحقیقات بھی ہوئیں۔",
          "بحرِ مردار کے طوماروں میں بائبلی نسخے، دیگر یہودی مذہبی تحریریں اور ایسے دستاویزات شامل ہیں جو ان جماعتوں کی زندگی اور عقائد سے تعلق رکھتے ہیں جنہوں نے انہیں لکھا یا محفوظ رکھا۔ یہ نسخے تیسری صدی قبل مسیح سے پہلی صدی عیسوی تک کے مختلف ادوار سے تعلق رکھتے ہیں۔",
          "یہ طومار اس لیے اہم ہیں کہ یہ عبرانی بائبل کی کتابوں کے قدیم متنی شواہد فراہم کرتے ہیں۔ ان کی دریافت سے پہلے محققین کے پاس عبرانی متن کے مطالعے کے لیے زیادہ تر بعد کے زمانے کے قلمی نسخے موجود تھے۔ بحرِ مردار کے نسخوں نے محققین کو ایسے قدیم شواہد سے تقابل کا موقع دیا جو پہلے دستیاب قرونِ وسطیٰ کے نسخوں سے کئی صدیاں پرانے ہیں۔",
          "عظیم طومارِ یسعیاہ ان دریافتوں میں سب سے زیادہ معروف ہے۔ اس میں یسعیاہ کی کتاب کا تقریباً مکمل متن محفوظ ہے اور اسے عموماً دوسری صدی قبل مسیح کا قرار دیا جاتا ہے۔ بعد کے عبرانی نسخوں کے ساتھ اس کا تقابل متن میں بڑی حد تک تسلسل کے ساتھ ساتھ بعض الفاظ اور املا کے اختلافات بھی ظاہر کرتا ہے۔ اس طرح محققین کو متن کی تاریخ سمجھنے کے لیے زیادہ معلومات ملتی ہیں۔",
          "بحرِ مردار کے طوماروں کو اس بات کا ثبوت قرار نہیں دینا چاہیے کہ ہر نسخہ حرف بہ حرف ایک جیسا تھا یا نقل کے دوران کبھی کوئی اختلاف پیدا نہیں ہوا۔ ان کی اصل اہمیت یہ ہے کہ یہ قدیم اور متنوع شواہد فراہم کرتے ہیں جن سے یہودی صحائف کے متن کی تاریخ کو بہتر طور پر سمجھا جا سکتا ہے۔",
        ],
        points: [
          "یہ دریافتیں ۱۹۴۷ء میں قمران کے قریب شروع ہوئیں۔",
          "ان میں بائبلی اور غیر بائبلی یہودی تحریریں شامل ہیں۔",
          "عظیم طومارِ یسعیاہ کتابِ یسعیاہ کا ایک اہم قدیم نسخہ ہے۔",
          "یہ طومار متن کے تسلسل اور اختلافات دونوں کے مطالعے میں مدد دیتے ہیں۔",
        ],
      },
      {
        title: "۶۔ کوڈیکس ویٹیکینس اور کوڈیکس سینیٹیکس",
        paragraphs: [
          "ابتدائی مسیحی بائبلی قلمی نسخوں میں کوڈیکس ویٹیکینس اور کوڈیکس سینیٹیکس خاص اہمیت رکھتے ہیں۔ دونوں کو عموماً چوتھی صدی عیسوی کا قرار دیا جاتا ہے اور ان میں یونانی بائبل کے بڑے حصے موجود ہیں۔",
          "کوڈیکس ویٹیکینس ویٹیکن لائبریری میں محفوظ ہے۔ یہ یونانی عہدِ قدیم اور عہدِ جدید کے متن کے مطالعے کے لیے ایک اہم نسخہ ہے۔ اس کی قدامت اور متنی شواہد کی وجہ سے محققین نے اس کا تفصیلی مطالعہ کیا ہے۔",
          "کوڈیکس سینیٹیکس انیسویں صدی میں کوہِ سینا کے علاقے میں واقع خانقاہ سینٹ کیتھرین سے دریافت ہوا۔ یہ قدیم مسیحی کوڈیکس کی اہم مثالوں میں سے ایک ہے۔ اس میں یونانی عہدِ قدیم کا بڑا حصہ اور عہدِ جدید تقریباً مکمل صورت میں موجود ہے، اس کے علاوہ بعض ابتدائی مسیحی تحریریں بھی شامل ہیں۔",
          "یہ کوڈیکس اس لیے اہم نہیں کہ ان کے ہر لفظ میں کوئی اختلاف نہیں، بلکہ اس لیے کہ یہ مسیحی بائبل کی تاریخ کے ابتدائی دور کے اہم شواہد فراہم کرتے ہیں۔ دیگر قلمی نسخوں کے ساتھ ان کا تقابل محققین کو بائبلی متن کی تاریخ سمجھنے میں مدد دیتا ہے۔",
          "ان نسخوں کا مطالعہ ہمیں تاریخی دستاویزات کو محفوظ رکھنے اور انہیں علمی تحقیق کے لیے دستیاب کرنے کی اہمیت بھی سمجھاتا ہے۔",
        ],
        points: [
          "دونوں کوڈیکس عموماً چوتھی صدی عیسوی کے قرار دیے جاتے ہیں۔",
          "ویٹیکینس ویٹیکن لائبریری میں محفوظ ہے۔",
          "سینیٹیکس خانقاہ سینٹ کیتھرین اور کوہِ سینا سے وابستہ ہے۔",
          "دونوں ابتدائی یونانی بائبلی متن کے اہم شواہد ہیں۔",
        ],
      },
      {
        title: "۷۔ سیپٹواجِنٹ اور لاطینی وُلگیٹ",
        paragraphs: [
          "جب یہودی برادریاں مختلف علاقوں میں پھیلیں اور یونانی زبان عام ہوئی تو مقدس صحائف کو یونانی زبان میں منتقل کرنے کی ضرورت پیدا ہوئی۔ یہ قدیم یونانی ترجمہ سیپٹواجِنٹ کہلاتا ہے، جسے عموماً LXX بھی لکھا جاتا ہے۔ اس ترجمے کا آغاز اسکندریہ میں توریت سے ہوا، جسے روایتی طور پر تیسری صدی قبل مسیح سے منسوب کیا جاتا ہے۔ دیگر کتابوں کے تراجم اور نظرثانی بعد کے ادوار میں ہوتے رہے۔",
          "سیپٹواجِنٹ یونانی بولنے والے یہودیوں اور بعد میں بہت سے ابتدائی مسیحیوں کے لیے اہم تھی۔ عہدِ جدید کے مصنفین بعض اوقات ایسے الفاظ استعمال کرتے ہیں جو یونانی عہدِ قدیم کے متن سے ملتے ہیں۔ اسی لیے سیپٹواجِنٹ ابتدائی یہودی اور مسیحی تشریح کے مطالعے میں بھی اہم ہے۔",
          "مسیحی تاریخ کا ایک اور اہم ترجمہ لاطینی وُلگیٹ ہے۔ جیروم نے چوتھی صدی کے آخر اور پانچویں صدی کے آغاز میں بائبل کے متون کو لاطینی زبان میں منتقل کرنے اور ان کی نظرثانی کا اہم کام کیا۔ ان کا کام مغربی مسیحیت میں کئی صدیوں تک نہایت اثرانداز رہا۔",
          "یہ تراجم ہمیں یاد دلاتے ہیں کہ بائبل کی تاریخ صرف عبرانی اور یونانی قلمی نسخوں کی نقل تک محدود نہیں۔ اس میں ان مترجمین کی محنت بھی شامل ہے جنہوں نے مقدس صحائف کو دوسری زبانیں بولنے والے لوگوں تک پہنچانے کی کوشش کی۔ ترجمے کے لیے الفاظ، قواعد، تاریخی پس منظر اور اصل متن کے مفہوم کو سمجھنا ضروری ہے۔",
        ],
        points: [
          "سیپٹواجِنٹ یہودی صحائف کا قدیم یونانی ترجمہ ہے۔",
          "اس کا آغاز توریت کے ترجمے سے ہوا اور یہ عمل وقت کے ساتھ آگے بڑھا۔",
          "جیروم کے لاطینی ترجمے اور نظرثانی کے کام نے وُلگیٹ کی تشکیل میں اہم کردار ادا کیا۔",
          "قدیم تراجم بائبلی متن اور اس کی تشریح کی تاریخ کے اہم شواہد ہیں۔",
        ],
      },
      {
        title: "۸۔ گٹن برگ اور بائبل کی طباعت",
        paragraphs: [
          "کئی صدیوں تک بائبل کی کتابیں ہاتھ سے نقل کی جاتی رہیں۔ اس وجہ سے کتابیں تیار کرنا ایک سست اور مہنگا عمل تھا۔ پندرھویں صدی میں یورپ میں متحرک دھاتی حروف کے ذریعے طباعت کی ترقی نے اس صورتِ حال میں بڑی تبدیلی پیدا کی۔",
          "یوہانس گٹن برگ کی چھپی ہوئی لاطینی بائبل، جو تقریباً ۱۴۵۴ء تا ۱۴۵۵ء میں تیار ہوئی، یورپ کی ابتدائی مطبوعہ کتابوں میں سے ایک مشہور مثال ہے۔ اسے گٹن برگ بائبل کہا جاتا ہے۔ اس کی تیاری طباعت اور کتابوں کی تاریخ میں ایک اہم سنگِ میل تھی۔",
          "طباعت کے ذریعے ایک ہی متن کی متعدد نقول ہاتھ سے نقل کرنے کے مقابلے میں زیادہ مؤثر انداز میں تیار کرنا ممکن ہوا۔ اس کا مطلب یہ نہیں کہ کتابیں فوراً ہر شخص کے لیے سستی اور دستیاب ہو گئیں؛ ابتدائی مطبوعہ کتابیں اب بھی مہنگی تھیں۔ تاہم طباعت نے کتابوں کی تیاری کے پیمانے اور رفتار کو بدلنے میں مدد دی۔",
          "سولہویں صدی اور اس کے بعد بائبل کے تراجم اور طباعت مختلف زبانوں میں پھیلنے لگے۔ مترجمین اور ناشرین نے مختلف ثقافتی اور مذہبی حالات میں کام کیا۔ جدید دور میں علمی تحقیق، قلمی نسخوں کے مطالعے، طباعت اور ڈیجیٹل ٹیکنالوجی نے بائبلی متون اور تحقیقی مواد کو زیادہ لوگوں کے لیے قابلِ رسائی بنا دیا ہے۔",
        ],
        points: [
          "گٹن برگ بائبل تقریباً ۱۴۵۴ء تا ۱۴۵۵ء میں چھاپی گئی۔",
          "متحرک حروف کی طباعت نے یورپ میں کتابوں کی تیاری بدل دی۔",
          "طباعت نے بائبلی تحریروں کو وسیع پیمانے پر پھیلانے میں مدد دی۔",
          "آج بھی بائبل کے مختلف زبانوں میں تراجم جاری ہیں۔",
        ],
      },
      {
        title: "۹۔ جدید بائبل تراجم اور ذمہ دارانہ مطالعہ",
        paragraphs: [
          "آج بائبل ہزاروں زبانوں اور لسانی صورتوں میں دستیاب ہے، اگرچہ ترجمے اور نظرثانی کا کام اب بھی جاری ہے۔ ترجمہ کرنے والی ٹیموں میں بائبلی زبانوں کے ماہرین، لسانیات کے محققین، مدیران اور ان برادریوں کے نمائندے شامل ہو سکتے ہیں جو اس ترجمے کو استعمال کریں گے۔",
          "مختلف تراجم میں طریقۂ ترجمہ کا فرق ہو سکتا ہے۔ بعض تراجم اصل زبان کے الفاظ اور جملوں کی ساخت کے زیادہ قریب رہنے کی کوشش کرتے ہیں۔ دوسرے تراجم اصل مفہوم کو ہدف زبان میں فطری اور رواں انداز سے بیان کرنے پر زیادہ توجہ دیتے ہیں۔ ہر طریقے میں فیصلے کرنے پڑتے ہیں، اس لیے کسی بھی ترجمے میں احتیاط سے مطالعے کی ضرورت ختم نہیں ہوتی۔",
          "قاری کو ترجمے کا مقصد، اس کا طریقۂ کار، علمی معیار اور اس کے ساتھ فراہم کیے گئے حواشی یا تعارف کو دیکھنا چاہیے۔ ایک سے زیادہ معتبر تراجم کا تقابل اہم تفصیلات سمجھنے میں مدد دے سکتا ہے، لیکن یہ تقابل سیاق و سباق کو سامنے رکھ کر ہونا چاہیے، صرف الگ الگ الفاظ کی بنیاد پر نہیں۔",
          "تاریخی تحقیق اور مسیحی ایمان لازماً ایک دوسرے کے مخالف نہیں ہیں۔ تاریخی مطالعہ ہمیں یہ سمجھنے میں مدد دیتا ہے کہ کون سے شواہد موجود ہیں، قلمی نسخوں کا باہمی تعلق کیا ہے اور تراجم کس طرح ترقی کرتے رہے۔ الٰہیاتی مطالعہ اس سے آگے بڑھ کر کلامِ مقدس کے مفہوم، اختیار اور ایمانی زندگی میں اس کی اہمیت کے سوالات پر غور کرتا ہے۔ یہ سوالات آپس میں متعلق ضرور ہیں، مگر ایک جیسے نہیں ہیں۔",
          "ایک سنجیدہ طالب علم کلامِ مقدس کے مطالعے میں احترام اور علمی دیانت داری دونوں کو اہمیت دیتا ہے۔ اس کا مطلب ہے کہ عبارت کو سیاق و سباق میں پڑھا جائے، شواہد کا جائزہ لیا جائے، جہاں غیر یقینی صورت ہو اسے تسلیم کیا جائے اور ایسے دعوے نہ کیے جائیں جن کی تائید تاریخی ذرائع نہیں کرتے۔",
        ],
        points: [
          "زبانوں اور معاشروں کی تبدیلی کے ساتھ بائبل کے تراجم کا کام جاری رہتا ہے۔",
          "مختلف تراجم اصل متن کا مفہوم مختلف طریقوں سے منتقل کر سکتے ہیں۔",
          "معتبر تراجم کا تقابل مفہوم سمجھنے میں مددگار ہے۔",
          "تاریخی شواہد کو درست انداز میں بیان کرنا ضروری ہے۔",
        ],
      },
    ],
    imagesTitle: "قدیم قلمی نسخے اور تحریری مواد",
    imagesNote:
      "یہ تصاویر اس سبق میں زیرِ بحث تحریری مواد، قلمی نسخوں اور تاریخی ترقی کی وضاحت کرتی ہیں۔",
    timelineTitle: "مختصر تاریخی ٹائم لائن",
    timelineNote:
      "تمام تاریخیں تقریبی ہیں۔ بائبل کی انفرادی کتابوں کی تصنیف اور تدوین کی تاریخیں علمی بحث کا موضوع ہیں۔ ذیل میں وسیع تاریخی ادوار بیان کیے گئے ہیں، ہر کتاب کے لیے متفقہ تاریخ نہیں۔",
    scriptureTitle: "مزید مطالعے کے لیے بائبلی حوالہ جات",
    scriptureNote:
      "ہر حوالے کو اس کے ادبی اور تاریخی سیاق و سباق میں پڑھیں۔ یہ حوالے تحریر، تعلیم اور مقدس صحائف کی حفاظت کے موضوعات پر غور کرنے میں مدد دیتے ہیں۔",
    scriptures: [
      {
        reference: "استثنا ۳۱:۲۴–۲۶",
        explanation:
          "موسیٰ شریعت کی تحریر مکمل کرکے اس کے تحریری گواہ کو محفوظ رکھنے کی ہدایت دیتا ہے۔",
      },
      {
        reference: "یرمیاہ ۳۶:۱–۴",
        explanation:
          "یرمیاہ اپنے پیغام کو باروک کے ذریعے لکھواتا ہے، جو اسے طومار پر تحریر کرتا ہے۔",
      },
      {
        reference: "لوقا ۱:۱–۴",
        explanation:
          "لوقا یسوع مسیح کے واقعات کے بارے میں اپنی تحقیق اور منظم بیان کا ذکر کرتا ہے۔",
      },
      {
        reference: "رومیوں ۱۵:۴",
        explanation:
          "پولس پہلے سے لکھی ہوئی باتوں کی تعلیم اور حوصلہ افزائی کے لیے اہمیت بیان کرتا ہے۔",
      },
      {
        reference: "۲ تیمتھیس ۳:۱۴–۱۷",
        explanation:
          "پولس مقدس نوشتوں کی تعلیم اور روحانی تربیت کے لیے اہمیت بیان کرتا ہے۔",
      },
      {
        reference: "۲ پطرس ۳:۱۵–۱۶",
        explanation:
          "پطرس پولس کے خطوط کا ذکر کرتا ہے اور تسلیم کرتا ہے کہ بعض باتوں کو سمجھنے کے لیے احتیاط درکار ہے۔",
      },
    ],
    termsTitle: "اہم علمی اصطلاحات",
    terms: [
      {
        term: "قلمی نسخہ",
        definition:
          "ایسی تحریری دستاویز جو جدید طباعت کے بجائے ہاتھ سے لکھی گئی ہو۔",
      },
      {
        term: "کاتب",
        definition:
          "وہ شخص جو تحریروں کو ہاتھ سے لکھنے یا نقل کرنے کی تربیت رکھتا ہو۔",
      },
      {
        term: "پاپائرس",
        definition:
          "پاپائرس کے پودے سے تیار کیا جانے والا قدیم تحریری مواد۔",
      },
      {
        term: "پارچمنٹ",
        definition:
          "جانوروں کی کھال سے تیار کی جانے والی تحریری سطح۔",
      },
      {
        term: "کوڈیکس",
        definition:
          "کتاب کی ایسی شکل جس میں صفحات کو جمع کرکے باندھا جاتا ہے۔",
      },
      {
        term: "متنی اختلاف",
        definition:
          "کسی تحریر کے مختلف قلمی نسخوں میں الفاظ یا عبارت کا فرق۔",
      },
      {
        term: "متنی تنقید",
        definition:
          "قدیم ترین قابلِ بازیافت عبارت کا تعین کرنے کے لیے متنی شواہد کا علمی تقابل۔",
      },
      {
        term: "سیپٹواجِنٹ",
        definition:
          "یہودی صحائف کا قدیم یونانی ترجمہ جو مختلف ادوار میں تیار ہوا۔",
      },
      {
        term: "وُلگیٹ",
        definition:
          "لاطینی بائبل کا اہم ترجمہ جو خصوصاً جیروم کے کام سے وابستہ ہے۔",
      },
      {
        term: "ترجمہ",
        definition:
          "ایک زبان کے متن کے مفہوم کو دوسری زبان میں منتقل کرنا۔",
      },
    ],
    keyPointsTitle: "یاد رکھنے کے اہم نکات",
    keyPoints: [
      "بائبل مختلف تاریخی حالات میں لکھی گئی تحریروں کا مجموعہ ہے۔",
      "عبرانی، ارامی اور یونانی بائبل کی بنیادی زبانیں ہیں۔",
      "پاپائرس اور پارچمنٹ قدیم تحریری مواد میں اہم تھے۔",
      "کاتب قلمی نسخوں کو ہاتھ سے نقل کرتے تھے اور اس عمل میں متنی اختلافات پیدا ہو سکتے تھے۔",
      "متنی تنقید قلمی نسخوں کے شواہد کا علمی اور منظم مطالعہ ہے۔",
      "بحرِ مردار کے طومار عبرانی صحائف کے قدیم متنی شواہد فراہم کرتے ہیں۔",
      "کوڈیکس ویٹیکینس اور کوڈیکس سینیٹیکس چوتھی صدی کے اہم بائبلی نسخے ہیں۔",
      "سیپٹواجِنٹ اور لاطینی وُلگیٹ نے بائبل کے تراجم کی تاریخ میں اہم کردار ادا کیا۔",
      "گٹن برگ بائبل یورپی طباعت کی تاریخ میں ایک اہم سنگِ میل ہے۔",
      "آج بھی دنیا بھر کے لوگوں تک کلامِ مقدس پہنچانے کے لیے تراجم جاری ہیں۔",
    ],
    quizTitle: "علم کا جائزہ: سبق ۲",
    quizDescription:
      "ہر سوال کے لیے ایک جواب منتخب کریں۔ اپنے نمبر اور وضاحت دیکھنے کے لیے تمام دس سوالات مکمل کریں۔",
    submitQuiz: "جوابات جمع کریں",
    resetQuiz: "دوبارہ کوشش کریں",
    answerRequired: "براہِ کرم جمع کرنے سے پہلے تمام دس سوالات کے جواب دیں۔",
    scoreLabel: "آپ کا نتیجہ",
    correctLabel: "درست",
    incorrectLabel: "غلط",
    answerKeyTitle: "جوابات کی وضاحت",
    reflectionTitle: "غور و فکر اور گفتگو",
    reflectionDescription:
      "ان سوالات کو ذاتی مطالعے، جماعتی گفتگو یا تحریری مشق کے لیے استعمال کریں۔",
    reflections: [
      "یہ سمجھنا کیوں ضروری ہے کہ بائبل مختلف تاریخی حالات میں مختلف مصنفین کی لکھی ہوئی تحریروں پر مشتمل ہے؟",
      "بحرِ مردار کے طومار عبرانی صحائف کی تاریخ اور ان کی نقل کے عمل کو سمجھنے میں کیا مدد دیتے ہیں؟",
      "قدیم کاتبوں کی محنت سے تحریروں کی حفاظت کی اہمیت اور مشکلات کے بارے میں ہم کیا سیکھ سکتے ہیں؟",
      "جب مختلف بائبلی قلمی نسخوں یا تراجم میں الفاظ کا فرق ہو تو ایک سنجیدہ قاری کو کس طرح ردِعمل دینا چاہیے؟",
      "تاریخی مطالعہ کلامِ مقدس کے لیے ہماری قدر کو کس طرح بڑھا سکتا ہے اور ہمیں ذمہ دارانہ تشریح کی طرف کیسے رہنمائی کر سکتا ہے؟",
    ],
    bibliographyTitle: "علمی کتابیات",
    bibliographyNote:
      "یہ کتابیں بائبلی قلمی نسخوں، متنی تنقید اور بائبل کی نقل و حفاظت کی تاریخ کے مزید علمی مطالعے کے لیے مفید ہیں۔",
    imageCreditsTitle: "تصاویر کے ماخذ اور اعتراف",
    imageCredits: [
  "عظیم طومارِ یسعیاہ: تصویر آرڈن بار حما نے کھینچی؛ اصل مخطوطے کا مصنف نامعلوم ہے۔ عوامی ملکیت (Public Domain)، بذریعہ Wikimedia Commons۔",
  "پاپائرس اور پارچمنٹ: مصنوعی ذہانت سے تیار کردہ تعلیمی تصویر۔",
  "اردن میوزیم میں بحرِ مردار کے طومار: تصویر ڈی اسٹینلے (ڈیوڈ اسٹینلے) کی ہے، CC BY 2.0 لائسنس کے تحت، بذریعہ Wikimedia Commons۔",
  "کوڈیکس ویٹیکینس: عوامی ملکیت کے مخطوطے کی تصویر؛ فوٹوگرافر نامعلوم۔ Public Domain Mark 1.0، بذریعہ Wikimedia Commons۔",
  "کوڈیکس سینیٹیکس: تصویر پوٹیٹو کاؤ 25 (PotatoCow25) کی ہے، CC0 کے تحت، بذریعہ Wikimedia Commons۔",
  "گٹن برگ کا مطبع: مصنوعی ذہانت سے تیار کردہ تعلیمی تصویر۔",
],
    previousLesson: "پچھلا سبق",
    nextLesson: "اگلا سبق",
    courseHome: "کورس کا مرکزی صفحہ",
    footer: "بائبل اور ہم اکیڈمی | سرٹیفکیٹ اِن بائبلیکل اسٹڈیز",
    sectionsLabel: "مطالعے کا حصہ",
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
      question: "Which statement best describes how the Bible came to us?",
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
      question: "بائبل ہم تک کیسے پہنچی؟ اس کی بہترین وضاحت کون سی ہے؟",
      options: [
        "یہ ایک شخص نے ایک سال میں لکھی۔",
        "یہ تحریر، جمع آوری، نقل اور ترجمے کے طویل تاریخی عمل سے ہم تک پہنچی۔",
        "یہ پہلی مرتبہ بیسویں صدی میں چھاپی گئی۔",
        "بائبل کی تمام کتابیں اصل میں لاطینی زبان میں لکھی گئیں۔",
      ],
      answer: 1,
      explanation:
        "بائبل مختلف ادوار میں لکھی گئی تحریروں کا مجموعہ ہے جو ایک طویل تاریخی عمل کے ذریعے ہم تک پہنچا۔",
    },
    {
      question: "عہدِ قدیم کا زیادہ تر حصہ کس زبان میں لکھا گیا؟",
      options: ["یونانی", "لاطینی", "عبرانی", "ارامی"],
      answer: 2,
      explanation:
        "عہدِ قدیم کا زیادہ تر حصہ عبرانی زبان میں ہے، جبکہ بعض حصے ارامی زبان میں ہیں۔",
    },
    {
      question: "عہدِ جدید کی کتابیں کس زبان میں لکھی گئیں؟",
      options: ["یونانی", "لاطینی", "عبرانی", "مصری"],
      answer: 0,
      explanation:
        "عہدِ جدید کی کتابیں یونانی زبان میں لکھی گئیں جو مشرقی بحیرۂ روم میں عام تھی۔",
    },
    {
      question: "پاپائرس کس چیز سے تیار کیا جاتا تھا؟",
      options: [
        "جانوروں کی ہڈیوں سے",
        "ایک پودے کے اندرونی حصے سے",
        "دھات کی چادروں سے",
        "پتھر کی تختیوں سے",
      ],
      answer: 1,
      explanation:
        "پاپائرس کے پودے کے اندرونی حصے سے تحریری سطح تیار کی جاتی تھی۔",
    },
    {
      question: "متنی اختلاف سے کیا مراد ہے؟",
      options: [
        "جدید بائبل کا سرورق",
        "مختلف قلمی نسخوں میں الفاظ یا عبارت کا فرق",
        "باب کا عنوان",
        "ایک قسم کا مطبع",
      ],
      answer: 1,
      explanation:
        "متنی اختلاف سے مراد کسی تحریر کے مختلف قلمی نسخوں میں الفاظ یا عبارت کا فرق ہے۔",
    },
    {
      question: "بحرِ مردار کے طوماروں کی دریافت کب شروع ہوئی؟",
      options: ["۱۹۴۷ء", "۱۴۵۵ء", "۱۸۰۰ء", "۲۰۰۱ء"],
      answer: 0,
      explanation:
        "یہ دریافتیں ۱۹۴۷ء میں بحرِ مردار کے قریب قمران کے علاقے میں شروع ہوئیں۔",
    },
    {
      question: "عظیم طومارِ یسعیاہ کیا ہے؟",
      options: [
        "جدید انگریزی ترجمہ",
        "کتابِ یسعیاہ کا تقریباً مکمل قدیم قلمی نسخہ",
        "طباعت کی مشین",
        "پولس کا لکھا ہوا خط",
      ],
      answer: 1,
      explanation:
        "عظیم طومارِ یسعیاہ میں کتابِ یسعیاہ کا تقریباً مکمل متن موجود ہے اور اسے عموماً دوسری صدی قبل مسیح کا قرار دیا جاتا ہے۔",
    },
    {
      question: "کوڈیکس ویٹیکینس اور کوڈیکس سینیٹیکس کا تعلق عموماً کس صدی سے ہے؟",
      options: ["پہلی صدی قبل مسیح", "دوسری صدی عیسوی", "چوتھی صدی عیسوی", "پندرھویں صدی عیسوی"],
      answer: 2,
      explanation:
        "دونوں کو عموماً چوتھی صدی عیسوی کا قرار دیا جاتا ہے اور یہ ابتدائی یونانی بائبل کے اہم نسخے ہیں۔",
    },
    {
      question: "لاطینی وُلگیٹ کے ساتھ خاص طور پر کس شخصیت کا نام وابستہ ہے؟",
      options: ["یوہانس گٹن برگ", "جیروم", "موسیٰ", "لوقا"],
      answer: 1,
      explanation:
        "جیروم نے چوتھی صدی کے آخر اور پانچویں صدی کے آغاز میں لاطینی ترجمے اور نظرثانی کا اہم کام کیا۔",
    },
    {
      question: "گٹن برگ بائبل تاریخی طور پر کیوں اہم ہے؟",
      options: [
        "یہ دنیا کی پہلی تحریر تھی۔",
        "یہ یورپ کی ابتدائی مطبوعہ بائبلوں میں سے ایک اہم مثال ہے۔",
        "یہ موسیٰ نے عبرانی زبان میں لکھی۔",
        "اس میں بحرِ مردار کے طومار شامل ہیں۔",
      ],
      answer: 1,
      explanation:
        "تقریباً ۱۴۵۴ء تا ۱۴۵۵ء میں چھپی گٹن برگ بائبل یورپ میں طباعت کی تاریخ کا اہم سنگِ میل ہے۔",
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

export default function LessonTwoPage() {
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
                href="/academy/introduction-to-the-bible/lesson-1"
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
