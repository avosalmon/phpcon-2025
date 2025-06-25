import InputError from "@/components/input-error";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SlideLayout } from "@/layouts/slide-layout";
import { cn } from "@/lib/utils";
import { useForm } from "@inertiajs/react";
import { Calendar, FileText, Send, User } from "lucide-react";
import { motion } from "motion/react";
import { ReactElement } from "react";

const Create = () => {
  const { data, setData, post, errors, processing } = useForm({
    name: "",
    email: "",
    talk_title: "",
    talk_description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post("/slides/talk-proposals");
  };

  return (
    <div className="mx-auto max-w-4xl">
      <motion.div
        className="rounded-2xl border border-white/20 bg-white/95 p-8 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">PHP Conference Japan 2025</h3>
            <p className="mt-2 text-gray-600">トークプロポーザル</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>応募期限: 2025年6月28日</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <h4 className="flex items-center border-b border-gray-200 pb-3 text-xl font-semibold text-gray-800">
              <User className="mr-2 h-5 w-5" />
              スピーカー情報
            </h4>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <Label className="mb-2 block">氏名 *</Label>
                <Input type="text" value={data.name} onChange={(e) => setData("name", e.target.value)} placeholder="Taylor Otwell" />
                <InputError message={errors.name} />
              </div>

              <div>
                <Label className="mb-2 block">メールアドレス *</Label>
                <Input type="email" value={data.email} onChange={(e) => setData("email", e.target.value)} placeholder="taylor@laravel.com" />
                <InputError message={errors.email} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="flex items-center border-b border-gray-200 pb-3 text-xl font-semibold text-gray-800">
              <FileText className="mr-2 h-5 w-5" />
              トーク情報
            </h4>

            <div>
              <Label className="mb-2 block">トークタイトル *</Label>
              <Input
                type="text"
                value={data.talk_title}
                onChange={(e) => setData("talk_title", e.target.value)}
                placeholder="Laravel + Inertia.jsで始めるモダンフルスタック開発"
              />
              <InputError message={errors.talk_title} />
            </div>

            <div>
              <Label className="mb-2 block">トーク概要 *</Label>
              <Textarea
                value={data.talk_description}
                onChange={(e) => setData("talk_description", e.target.value)}
                className="resize-none"
                rows={8}
                placeholder="このトークでは、Laravel + Inertia.js + Reactを使ったモダンなフルスタック開発について説明します。従来のSPAの複雑さを排除しながら、リッチなユーザー体験を提供する方法を実例とともに紹介します。"
              />
              <InputError message={errors.talk_description} />
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={processing}
              className={cn(
                "flex w-full items-center justify-center space-x-2 rounded-lg px-6 py-4 font-medium transition-all duration-200",
                processing
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 hover:shadow-lg",
              )}
            >
              <Send className="h-5 w-5" />
              <span>応募する</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

Create.layout = (page: ReactElement) => <SlideLayout>{page}</SlideLayout>;

export default Create;
