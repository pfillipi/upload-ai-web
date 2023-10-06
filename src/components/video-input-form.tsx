import { FileVideo, Upload } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ChangeEvent, useState } from "react";

export function VideInputForm() {
  const [videoFile, setVideoFile] = useState<File | null>(null);

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget;

    if (!files) {
      return;
    }
    const selectedFile = files[0];

    setVideoFile(selectedFile);
  }

  return (
    <form className="space-y-6">
      <label
        htmlFor="video"
        className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        <FileVideo className="w-4 h-4"></FileVideo>
        Velg en video.
      </label>
      <input
        type="file"
        id="video"
        accept="video/mp4"
        className="sr-only"
        onChange={handleFileSelected}
      />
      <Separator />

      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Transkripsjons prompt</Label>
        <Textarea
          id="transcription_prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="Vennligst inkluder nøkkelord som ble nevnt i videon, og skill dem med komma (,)"
        />
      </div>
      <Button type="submit" className="w-full">
        Lagre video
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
