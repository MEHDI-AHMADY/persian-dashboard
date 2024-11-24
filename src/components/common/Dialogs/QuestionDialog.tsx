import { Dialog, DialogContent } from "@/components/ui/dialog";
import Button from "../Button/CustomButton";

type DialogProps = {
  question: string;
  setIsShowDeleteModal: (value: boolean) => void;
};

export default function QuestionDialog({
  question,
  setIsShowDeleteModal,
}: DialogProps) {
  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) setIsShowDeleteModal(false);
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex flex-col items-center gap-5">
          <div>{question}</div>
          <div className="flex gap-4">
            <Button
              type="submit"
              className="bg-red-400 hover:bg-red-500 hover:text-white"
            >
              بلی
            </Button>
            <Button
              type="submit"
              className="bg-sidebarMainColor hover:bg-sidebarMainColor"
              onClick={() => setIsShowDeleteModal(false)}
            >
              خیر
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
