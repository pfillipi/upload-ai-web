import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">trendify</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            ❤️‍🔥🇳🇴Skapt med lidenskap i hjertet av Norge.🇳🇴❤️‍🔥
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Vennligst del din prompt til kunstig intelligens…"
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultatet skapt av kunstig intelligens…"
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Husk at du enkelt kan inkludere transkripsjonsinnholdet fra den
            valgte videon ved å bruka{" "}
            <code className="text-violet-400">
              {"{transkripsjonsvariabelen}"}
            </code>{" "}
            i ledeteksten.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form action=""></form>
        </aside>
      </main>
    </div>
  );
}
