import { SlideLayout } from "@/layouts/slide-layout";
import { cn } from "@/lib/utils";
import { AlertCircle, Calendar, CheckCircle, FileText, Tag, User, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { ReactElement } from "react";

interface TalkProposal {
  id: number;
  name: string;
  email: string;
  talk_title: string;
  talk_description: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  updated_at: string;
}

const statuses = {
  pending: {
    label: "審査中",
    icon: <AlertCircle className="h-4 w-4 text-yellow-600" />,
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
  },
  approved: {
    label: "採択",
    icon: <CheckCircle className="h-4 w-4 text-green-600" />,
    color: "bg-green-100 text-green-800 border-green-200",
  },
  rejected: {
    label: "却下",
    icon: <XCircle className="h-4 w-4 text-red-600" />,
    color: "bg-red-100 text-red-800 border-red-200",
  },
};

const Index = ({ proposals }: { proposals: TalkProposal[] }) => {
  return (
    <div className="space-y-10">
      <motion.h1
        className="text-center text-4xl font-bold text-white md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        トークプロポーザル一覧
      </motion.h1>

      <motion.div
        className="overflow-hidden rounded-2xl border border-white/20 bg-white/95 shadow-lg backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-6">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-gray-600" />
                <span className="text-lg font-semibold text-gray-900">{proposals.length} 件のプロポーザル</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{proposals.filter((p) => p.status === "approved").length} 採択</span>
                </div>
                <div className="flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <span>{proposals.filter((p) => p.status === "pending").length} 審査中</span>
                </div>
                <div className="flex items-center space-x-1">
                  <XCircle className="h-4 w-4 text-red-600" />
                  <span>{proposals.filter((p) => p.status === "rejected").length} 却下</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-h-[600px] overflow-y-auto">
          <div className="space-y-4 p-6">
            {proposals.map((proposal, index) => (
              <motion.div
                key={proposal.id}
                className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <div className="flex flex-col space-y-4 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="pr-4 text-xl leading-tight font-bold text-gray-900">{proposal.talk_title}</h3>
                      <div
                        className={cn(
                          "flex items-center space-x-1 rounded-full border px-3 py-1 text-xs font-medium",
                          statuses[proposal.status].color,
                        )}
                      >
                        {statuses[proposal.status].icon}
                        <span>{statuses[proposal.status].label}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span className="font-medium">{proposal.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(proposal.created_at).toISOString().split("T")[0]}</span>
                      </div>
                    </div>

                    <p className="line-clamp-2 text-sm leading-relaxed text-gray-700">{proposal.talk_description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="border-t border-gray-200 bg-gray-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4" />
              <span>総応募数: {proposals.length}件</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>採択率: {Math.round((proposals.filter((p) => p.status === "approved").length / proposals.length) * 100)}%</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

Index.layout = (page: ReactElement) => <SlideLayout>{page}</SlideLayout>;

export default Index;
