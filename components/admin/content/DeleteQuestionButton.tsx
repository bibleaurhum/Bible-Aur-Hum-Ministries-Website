
"use client";

import { deleteQuestion } from "@/app/(admin)/admin/questions/new/actions";

type DeleteQuestionButtonProps = {
  questionId: number;
};

export default function DeleteQuestionButton({
  questionId,
}: DeleteQuestionButtonProps) {
  const deleteQuestionWithId = deleteQuestion.bind(null, questionId);

  return (
    <form action={deleteQuestionWithId}>
      <button
        type="submit"
        onClick={(e) => {
          if (
            !window.confirm(
              "Are you sure you want to delete this question?"
            )
          ) {
            e.preventDefault();
          }
        }}
        className="font-medium text-red-600 hover:underline"
      >
        Delete
      </button>
    </form>
  );
}
