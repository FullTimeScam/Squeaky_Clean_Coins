import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageModal = ({ src, alt, className }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className={`cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
          loading="lazy"
        />
      </DialogTrigger>
      <DialogContent className="max-w-6xl p-0 border-0">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  )
}