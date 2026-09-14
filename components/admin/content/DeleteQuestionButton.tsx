"use client";

type DeleteQuestionButtonProps = {
  questionId: number;
};

export default function DeleteQuestionButton({
  questionId,
}: DeleteQuestionButtonProps) {
  return (
    <form
      action={`/admin/questions/${questionId}/delete`}
      method="POST"
    >
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