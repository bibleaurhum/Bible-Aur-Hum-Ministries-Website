-- CreateTable
CREATE TABLE "BibleStudy" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT,
    "content" TEXT,
    "featuredImage" TEXT,
    "bibleReference" TEXT,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BibleStudy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BibleStudyTag" (
    "bibleStudyId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "BibleStudyTag_pkey" PRIMARY KEY ("bibleStudyId","tagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "BibleStudy_slug_key" ON "BibleStudy"("slug");

-- AddForeignKey
ALTER TABLE "BibleStudy" ADD CONSTRAINT "BibleStudy_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BibleStudyTag" ADD CONSTRAINT "BibleStudyTag_bibleStudyId_fkey" FOREIGN KEY ("bibleStudyId") REFERENCES "BibleStudy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BibleStudyTag" ADD CONSTRAINT "BibleStudyTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
