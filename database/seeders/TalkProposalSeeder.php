<?php

namespace Database\Seeders;

use App\Models\TalkProposal;
use Illuminate\Database\Seeder;

class TalkProposalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TalkProposal::truncate();

        $propsals = [
            [
                'name' => '山田洋次郎',
                'email' => 'yamada@example.com',
                'talk_title' => 'DockerとKubernetesによるPHPアプリケーションの運用',
                'talk_description' => 'PHPアプリケーションをDockerコンテナ化し、Kubernetesで運用するための実践的なアプローチを紹介します。',
                'status' => 'approved',
                'created_at' => '2025-06-15 00:00:00',
                'updated_at' => '2025-06-15 00:00:00',
            ],
            [
                'name' => '鈴木美咲',
                'email' => 'misa@example.com',
                'talk_title' => 'Vibeコーディングで1人ユニコーンを作ろう',
                'talk_description' => 'AIを使って1人でプロダクト開発、デザイン、マーケティング、マネタイズまでを行う方法について説明します。',
                'status' => 'pending',
                'created_at' => '2025-06-14 00:00:00',
                'updated_at' => '2025-06-14 00:00:00',
            ],
            [
                'name' => '濱崎竜太',
                'email' => 'ryuta@example.com',
                'talk_title' => 'Laravel + Inertia.jsで始めるモダンフルスタック開発',
                'talk_description' => 'LaravelとInertia.jsを組み合わせたモダンなフルスタック開発について、実際のプロジェクト事例を交えながら解説します。従来のSPAの複雑さを排除しながら、リッチなユーザー体験を提供する方法を学びましょう。',
                'status' => 'approved',
                'created_at' => '2025-06-13 00:00:00',
                'updated_at' => '2025-06-13 00:00:00',
            ],
            [
                'name' => '田中太郎',
                'email' => 'taro@example.com',
                'talk_title' => 'React Server Componentsの実践的活用法',
                'talk_description' => 'React Server Componentsを実際のプロダクションで活用するためのベストプラクティスと注意点について詳しく解説します。',
                'status' => 'pending',
                'created_at' => '2025-06-13 00:00:00',
                'updated_at' => '2025-06-13 00:00:00',
            ],
            [
                'name' => '佐藤奈々子',
                'email' => 'nanako@example.com',
                'talk_title' => 'Tailwind CSS v4',
                'talk_description' => 'Tailwind CSS v4の新機能と、実際のプロジェクトでの活用方法について説明します。',
                'status' => 'pending',
                'created_at' => '2025-06-12 00:00:00',
                'updated_at' => '2025-06-12 00:00:00',
            ],
            [
                'name' => '高橋健一',
                'email' => 'kenichi@example.com',
                'talk_title' => 'Laravelでのモジュラーモノリスアーキテクチャ実装',
                'talk_description' => 'Laravelを使ったモジュラーモノリスアーキテクチャの実装方法と、実際の運用で得られた知見を共有します。',
                'status' => 'approved',
                'created_at' => '2025-06-11 00:00:00',
                'updated_at' => '2025-06-11 00:00:00',
            ],
            [
                'name' => '伊藤麻衣',
                'email' => 'mai@example.com',
                'talk_title' => 'モバイルアプリ開発におけるUX設計の重要性',
                'talk_description' => 'モバイルアプリケーションにおけるユーザー体験設計の基本原則と、実際のプロジェクトでの適用例を紹介します。',
                'status' => 'rejected',
                'created_at' => '2025-06-10 00:00:00',
                'updated_at' => '2025-06-10 00:00:00',
            ],
            [
                'name' => '中村健太',
                'email' => 'kenta@example.com',
                'talk_title' => 'Webアプリケーションセキュリティの最新動向',
                'talk_description' => 'Webアプリケーションにおけるセキュリティ脅威の最新動向と、効果的な対策方法について解説します。',
                'status' => 'approved',
                'created_at' => '2025-06-08 00:00:00',
                'updated_at' => '2025-06-08 00:00:00',
            ],
        ];

        TalkProposal::insert($propsals);
    }
}
