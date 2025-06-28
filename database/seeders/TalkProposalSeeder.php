<?php

namespace Database\Seeders;

use App\Models\TalkProposal;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class TalkProposalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TalkProposal::truncate();

        // Speaker names pool
        $speakerNames = [
            '山田洋次郎', '鈴木美咲', '濱崎竜太', '田中太郎', '佐藤奈々子', '高橋健一', '伊藤麻衣', '中村健太',
            '小林真理', '加藤智也', '吉田美穂', '渡辺拓也', '松本香織', '井上雄介', '木村恵', '林聡',
            '清水美紀', '山崎大輔', '森由美', '池田翔', '橋本愛', '石川裕太', '斉藤麻衣', '菊池健太',
            '阿部真理', '宮本智也', '内田美穂', '岡田拓也', '坂本香織', '藤井雄介', '長谷川恵', '村上聡',
            '前田美紀', '岩田大輔', '原田由美', '酒井翔', '西川愛', '石井裕太', '森田麻衣', '小川健太',
            '河野真理', '上田智也', '竹内美穂', '柴田拓也', '平野香織', '島田雄介', '青木恵', '今井聡'
        ];

        // Talk templates by category
        $talkTemplates = [
            'laravel' => [
                'titles' => [
                    'Laravelでのマイクロサービス設計パターン',
                    'Laravel Octaneによる高速化の実践',
                    'Laravel Livewireで作るリアルタイムアプリケーション',
                    'Laravel + Vue.jsによるSPA開発',
                    'Laravelのキューシステム活用術',
                    'Laravel Novaによる管理画面構築',
                    'Laravel Sanctumを使ったAPI認証',
                    'Laravelのテスト戦略とベストプラクティス',
                    'Laravel Eloquentの高度な使い方',
                    'Laravel Sailによる開発環境構築',
                    'Laravel Jetstream入門',
                    'Laravelでのイベントドリブン設計',
                    'Laravel Pulsによるアプリケーション監視',
                    'Laravelでのセキュリティ対策',
                    'Laravel + Inertia.jsによるモダン開発',
                    'Laravelのパフォーマンス最適化',
                    'Laravel Breezeカスタマイズ術',
                    'Laravelでのモジュラーアーキテクチャ',
                    'Laravel + React Server Components',
                    'Laravel Folio: ファイルベースルーティング'
                ],
                'descriptions' => [
                    'Laravelを使ったマイクロサービスアーキテクチャの設計と実装について詳しく解説します。',
                    'Laravel Octaneを活用してアプリケーションの処理速度を劇的に向上させる方法を紹介します。',
                    'Laravel Livewireを使ってリアルタイムでインタラクティブなWebアプリケーションを構築する手法を学びます。',
                    'LaravelのバックエンドとVue.jsのフロントエンドを組み合わせたSPA開発の実践的なアプローチを説明します。',
                    'Laravelのキューシステムを活用して、重い処理を効率的に非同期で実行する方法を解説します。',
                    'Laravel Novaを使って美しく機能的な管理画面を素早く構築するテクニックを紹介します。',
                    'Laravel SanctumによるAPI認証の実装方法と、セキュアなトークン管理について説明します。',
                    'Laravelアプリケーションの品質を保つためのテスト戦略とベストプラクティスを共有します。',
                    'Laravel Eloquent ORMの高度な機能と、効率的なデータベース操作のテクニックを解説します。',
                    'Laravel Sailを使って、Dockerベースの統一された開発環境を構築する方法を紹介します。',
                    'Laravel Jetstreamによる認証システムの実装と、カスタマイズのポイントを説明します。',
                    'Laravelでイベントドリブンなアーキテクチャを設計し、保守性の高いアプリケーションを構築する方法を解説します。',
                    'Laravel Pulsを使ってアプリケーションのパフォーマンスを監視し、問題を早期発見する手法を紹介します。',
                    'Laravelアプリケーションにおけるセキュリティ脅威と、効果的な対策方法について詳しく解説します。',
                    'LaravelとInertia.jsを組み合わせたモダンなフルスタック開発の手法と利点を紹介します。',
                    'Laravelアプリケーションのパフォーマンスを最適化するための具体的な手法とツールを解説します。',
                    'Laravel Breezeをベースにしたカスタム認証システムの構築方法を詳しく説明します。',
                    'Laravelでモジュラーアーキテクチャを実装し、大規模アプリケーションの保守性を向上させる方法を解説します。',
                    'LaravelとReact Server Componentsを組み合わせた次世代のWebアプリケーション開発手法を紹介します。',
                    'Laravel Folioによるファイルベースルーティングの活用方法と、従来の手法との比較を解説します。'
                ]
            ],
            'frontend' => [
                'titles' => [
                    'React 19の新機能完全ガイド',
                    'Vue 3 Composition APIの実践活用',
                    'TypeScriptによる型安全なフロントエンド開発',
                    'Next.js App Routerの深掘り',
                    'Tailwind CSS v4の新機能',
                    'WebAssemblyとJavaScriptの連携',
                    'Viteによる高速フロントエンド開発',
                    'React Server Componentsの実践',
                    'Nuxt 4の新アーキテクチャ',
                    'SvelteKitでのフルスタック開発',
                    'Astroによる高速サイト構築',
                    'Remixによるプログレッシブエンハンスメント',
                    'Angular Signals入門',
                    'Solid.jsの響応的UI設計',
                    'Web Componentsの実践活用',
                    'PWAの最新動向と実装',
                    'GraphQL Clientの比較検討',
                    'Zustandによる状態管理',
                    'React Queryのデータフェッチング戦略',
                    'CSS-in-JSの進化と選択'
                ],
                'descriptions' => [
                    'React 19で追加された新機能について、実際のコード例を交えながら詳しく解説します。',
                    'Vue 3のComposition APIを使って、再利用性の高いコンポーネントを作成する方法を学びます。',
                    'TypeScriptを活用して、バグを減らし保守性の高いフロントエンドアプリケーションを構築する手法を紹介します。',
                    'Next.js App Routerの仕組みと、効果的な活用方法について詳しく解説します。',
                    'Tailwind CSS v4の新機能と、実際のプロジェクトでの活用事例を紹介します。',
                    'WebAssemblyとJavaScriptを連携させて、高性能なWebアプリケーションを構築する方法を解説します。',
                    'Viteを使った高速な開発環境の構築と、生産性向上のテクニックを紹介します。',
                    'React Server Componentsの概念と、実際のプロジェクトでの実装方法を詳しく説明します。',
                    'Nuxt 4の新しいアーキテクチャと、従来バージョンからの移行ポイントを解説します。',
                    'SvelteKitを使ったフルスタック開発の手法と、その利点について説明します。',
                    'Astroを活用して、高速で軽量な静的サイトを構築するテクニックを紹介します。',
                    'Remixによるプログレッシブエンハンスメントの実装と、ユーザー体験向上の手法を解説します。',
                    'Angular Signalsの仕組みと、リアクティブなアプリケーション開発への活用方法を説明します。',
                    'Solid.jsの響応的UI設計の特徴と、パフォーマンス最適化のポイントを解説します。',
                    'Web Componentsの標準仕様と、実際のプロジェクトでの活用事例を紹介します。',
                    'PWA（Progressive Web App）の最新動向と、実装時のベストプラクティスを解説します。',
                    'Apollo Client、Relay、TanStack Queryなど、主要なGraphQL Clientの特徴と選択基準を比較します。',
                    'Zustandを使った軽量で直感的な状態管理の実装方法を詳しく説明します。',
                    'React Queryを活用したデータフェッチング戦略と、キャッシュ管理のベストプラクティスを解説します。',
                    'CSS-in-JSライブラリの進化と、プロジェクトに適した選択基準について説明します。'
                ]
            ],
            'devops' => [
                'titles' => [
                    'Kubernetesによるマイクロサービス運用',
                    'Docker Composeの実践活用術',
                    'CI/CDパイプラインの設計パターン',
                    'Terraformによるインフラ自動化',
                    'Prometheusによる監視システム構築',
                    'AWS CDKでのインフラコード管理',
                    'GitOpsによるデプロイメント戦略',
                    'Service Meshによるマイクロサービス間通信',
                    'ログ分析基盤の構築と運用',
                    'コンテナセキュリティのベストプラクティス',
                    'AnsibleによるConfiguration Management',
                    'Helmチャートの作成と管理',
                    'Jaegerによる分散トレーシング',
                    'Fluxによる継続的デリバリー',
                    'Istioによるサービスメッシュ運用',
                    'GrafanaによるObservability構築',
                    'ArgoCD活用のGitOps実践',
                    'Veleroによるバックアップ戦略',
                    'OPAによるポリシー管理',
                    'Linkerdによる軽量サービスメッシュ'
                ],
                'descriptions' => [
                    'Kubernetesクラスタ上でマイクロサービスを効率的に運用するための設計パターンと実践的なノウハウを紹介します。',
                    'Docker Composeを使った開発環境の構築から本番運用まで、実践的な活用方法を詳しく解説します。',
                    '効率的なCI/CDパイプラインの設計原則と、実際のプロジェクトでの実装事例を紹介します。',
                    'Terraformを使ったInfrastructure as Codeの実践と、チーム開発での運用ノウハウを解説します。',
                    'Prometheusを中心とした包括的な監視システムの構築方法と、効果的なアラート設定を説明します。',
                    'AWS CDKを活用したインフラストラクチャのコード管理と、ベストプラクティスを紹介します。',
                    'GitOpsによる宣言的デプロイメントの実装と、従来手法との比較・メリットを解説します。',
                    'IstioやLinkerdなどのService Meshを使った、マイクロサービス間の安全で信頼性の高い通信を実現する方法を説明します。',
                    'ELKスタックやFluentdを使ったログ収集・分析基盤の構築と、効果的な運用方法を解説します。',
                    'コンテナ環境におけるセキュリティ脅威と、それに対する効果的な対策方法を詳しく紹介します。',
                    'Ansibleを使ったサーバー設定の自動化と、Configuration Managementのベストプラクティスを解説します。',
                    'HelmチャートによるKubernetesアプリケーションのパッケージ化と、効率的な管理手法を紹介します。',
                    'Jaegerを使った分散システムにおけるリクエストトレーシングの実装と、パフォーマンス分析手法を解説します。',
                    'FluxによるGitOpsワークフローの実装と、継続的デリバリーのベストプラクティスを説明します。',
                    'Istioサービスメッシュの導入から運用まで、実際のプロダクション環境での活用事例を紹介します。',
                    'GrafanaとPrometheusを組み合わせたObservabilityプラットフォームの構築方法を詳しく解説します。',
                    'ArgoCDを使ったGitOpsによるKubernetesアプリケーションのデプロイメント自動化を実践的に説明します。',
                    'Veleroを活用したKubernetesクラスタのバックアップ・リストア戦略と、災害復旧計画を解説します。',
                    'Open Policy Agent（OPA）による、Kubernetesクラスタのセキュリティポリシー管理手法を紹介します。',
                    'Linkerdによる軽量なサービスメッシュの導入と、マイクロサービス間通信の可視化・制御方法を解説します。'
                ]
            ],
            'ai' => [
                'titles' => [
                    'ChatGPT APIを活用したWebアプリ開発',
                    'LangChainによるLLMアプリケーション構築',
                    'Stable Diffusionを使った画像生成API',
                    'OpenAI Assistants APIの実践活用',
                    'RAGシステムの設計と実装',
                    'ファインチューニングによるカスタムAIモデル',
                    'Whisper APIによる音声認識システム',
                    'DALL-E 3を使った画像生成アプリ',
                    'LlamaIndexによる文書検索システム',
                    'HuggingFace Transformersの実践',
                    'Embeddings APIによるセマンティック検索',
                    'Code Interpreterの活用事例',
                    'AI Agentの設計パターン',
                    'プロンプトエンジニアリングのベストプラクティス',
                    'ローカルLLMの運用と最適化',
                    'AIを活用したコード生成ツール開発',
                    'Computer Visionによる画像解析',
                    'Natural Language Processingの実践',
                    'MLOpsによるAIモデル運用',
                    'AIエシックスと責任あるAI開発'
                ],
                'descriptions' => [
                    'ChatGPT APIを活用して、対話型Webアプリケーションを構築する実践的な手法を詳しく解説します。',
                    'LangChainフレームワークを使って、LLMを活用したアプリケーションを効率的に開発する方法を紹介します。',
                    'Stable Diffusionを組み込んだ画像生成APIの構築と、実際のWebサービスへの統合方法を説明します。',
                    'OpenAI Assistants APIの機能と、チャットボットや自動化ツール開発への活用事例を解説します。',
                    'Retrieval Augmented Generation（RAG）システムの設計原理と、実装時のポイントを詳しく説明します。',
                    '既存のAIモデルをファインチューニングして、特定のタスクに特化したカスタムモデルを作成する手法を紹介します。',
                    'OpenAI Whisper APIを使った音声認識システムの構築と、リアルタイム処理の実装方法を解説します。',
                    'DALL-E 3 APIを活用した画像生成アプリケーションの開発と、UI/UX設計のポイントを説明します。',
                    'LlamaIndexを使って、大量の文書データから効率的に情報を検索するシステムの構築方法を解説します。',
                    'HuggingFace Transformersライブラリを使った、自然言語処理タスクの実装と最適化手法を紹介します。',
                    'OpenAI Embeddings APIによるセマンティック検索の実装と、検索精度向上のテクニックを解説します。',
                    'GPT-4のCode Interpreter機能を活用した、データ分析と可視化の自動化事例を紹介します。',
                    '自律的に動作するAI Agentの設計パターンと、複雑なタスクの自動化手法を詳しく説明します。',
                    '効果的なプロンプトの作成方法と、LLMから最適な出力を得るためのエンジニアリング手法を解説します。',
                    'ローカル環境でLLMを運用するためのハードウェア要件と、パフォーマンス最適化の方法を紹介します。',
                    'AIを活用したコード生成ツールの開発手法と、開発生産性向上への応用事例を説明します。',
                    'Computer Visionライブラリを使った画像認識・解析システムの構築と、実際のユースケースを解説します。',
                    '自然言語処理技術を活用したテキスト分析システムの実装と、ビジネスへの応用方法を紹介します。',
                    'MLOpsの原則に基づいたAIモデルの継続的な学習・デプロイメント・監視システムの構築方法を解説します。',
                    'AI開発における倫理的配慮と、責任あるAI開発のためのガイドラインとベストプラクティスを説明します。'
                ]
            ],
            'other' => [
                'titles' => [
                    'アクセシビリティを考慮したWeb設計',
                    'UXデザインの原則と実践',
                    'Webパフォーマンス最適化の全て',
                    'SEO対策の最新トレンド',
                    'プロダクトマネジメントの基礎',
                    'アジャイル開発の実践ガイド',
                    'リモートチーム運営のノウハウ',
                    'コードレビューの効果的な進め方',
                    '技術負債との向き合い方',
                    'API設計のベストプラクティス',
                    'データベース設計の原則',
                    'セキュリティ脅威と対策',
                    'モバイルファーストデザイン',
                    'Webブラウザの仕組み解説',
                    'HTTP/3とQUICプロトコル',
                    'WebRTCによるリアルタイム通信',
                    'ブロックチェーン技術入門',
                    'IoT開発の基礎知識',
                    'エッジコンピューティングの活用',
                    'サステナブルなソフトウェア開発'
                ],
                'descriptions' => [
                    'Webアクセシビリティの重要性と、実際の開発プロセスで取り入れるべき設計原則と実装手法を解説します。',
                    'ユーザー中心設計の原則と、優れたユーザー体験を創造するための実践的なUXデザイン手法を紹介します。',
                    'Webサイトのパフォーマンスを向上させるための包括的な最適化手法と、測定・改善のプロセスを詳しく説明します。',
                    '検索エンジン最適化の最新動向と、効果的なSEO戦略の立案・実施方法について実例を交えて解説します。',
                    'プロダクトマネジメントの基本概念と、成功するプロダクトを作るための戦略立案・実行手法を紹介します。',
                    'アジャイル開発手法の実践的な適用方法と、チームの生産性と品質を向上させるテクニックを解説します。',
                    'リモートワーク環境でのチーム運営のコツと、分散チームでの効果的なコミュニケーション手法を説明します。',
                    '効果的なコードレビューの進め方と、チーム全体のコード品質向上につながるプラクティスを紹介します。',
                    '技術負債の識別・評価・解決方法と、持続可能なソフトウェア開発のためのアプローチを詳しく解説します。',
                    'RESTful APIの設計原則と、使いやすく保守性の高いAPI設計のベストプラクティスを説明します。',
                    '効率的で拡張性のあるデータベース設計の原則と、実際のプロジェクトでの適用事例を紹介します。',
                    'Webアプリケーションにおけるセキュリティ脅威の最新動向と、効果的な対策の実装方法を解説します。',
                    'モバイルファーストアプローチによるレスポンシブデザインの実践と、ユーザビリティ向上のテクニックを説明します。',
                    'Webブラウザの内部動作と、レンダリングプロセスの理解に基づいたパフォーマンス最適化手法を解説します。',
                    'HTTP/3とQUICプロトコルの特徴と、Webアプリケーションのパフォーマンス向上への活用方法を紹介します。',
                    'WebRTC技術を使ったリアルタイム通信アプリケーションの開発と、実装時の注意点を詳しく説明します。',
                    'ブロックチェーン技術の基本概念と、Web開発での実践的な活用事例について初心者向けに解説します。',
                    'IoTデバイスとの連携を考慮したWeb開発の手法と、セキュリティ・プライバシー対策について説明します。',
                    'エッジコンピューティングの概念と、CDNやエッジファンクションを活用したWebアプリケーション最適化を解説します。',
                    '環境負荷を考慮したサステナブルなソフトウェア開発のアプローチと、グリーンIT実践手法を紹介します。'
                ]
            ]
        ];

        $statuses = ['approved', 'pending', 'rejected'];
        $categories = array_keys($talkTemplates);
        $proposals = [];

        // Generate base proposals maintaining existing ones
        $baseProposals = [
            [
                'name' => '山田洋次郎',
                'email' => 'yamada@example.com',
                'talk_title' => 'DockerとKubernetesによるPHPアプリケーションの運用',
                'talk_description' => 'PHPアプリケーションをDockerコンテナ化し、Kubernetesで運用するための実践的なアプローチを紹介します。',
                'category' => 'devops',
                'status' => 'approved',
                'created_at' => '2025-06-15 00:00:00',
                'updated_at' => '2025-06-15 00:00:00',
            ],
            [
                'name' => '鈴木美咲',
                'email' => 'misa@example.com',
                'talk_title' => 'Vibeコーディングで1人ユニコーンを作ろう',
                'talk_description' => 'AIを使って1人でプロダクト開発、デザイン、マーケティング、マネタイズまでを行う方法について説明します。',
                'category' => 'ai',
                'status' => 'pending',
                'created_at' => '2025-06-14 00:00:00',
                'updated_at' => '2025-06-14 00:00:00',
            ],
            [
                'name' => '濱崎竜太',
                'email' => 'ryuta@example.com',
                'talk_title' => 'Laravel + Inertia.jsで始めるモダンフルスタック開発',
                'talk_description' => 'LaravelとInertia.jsを組み合わせたモダンなフルスタック開発について、実際のプロジェクト事例を交えながら解説します。従来のSPAの複雑さを排除しながら、リッチなユーザー体験を提供する方法を学びましょう。',
                'category' => 'laravel',
                'status' => 'approved',
                'created_at' => '2025-06-13 00:00:00',
                'updated_at' => '2025-06-13 00:00:00',
            ]
        ];

        $proposals = array_merge($proposals, $baseProposals);

        // Generate additional proposals to reach 100+
        $emailCounter = 1;
        $targetCount = 30;

        while (count($proposals) < $targetCount) {
            $category = $categories[array_rand($categories)];
            $categoryData = $talkTemplates[$category];

            $titleIndex = array_rand($categoryData['titles']);
            $title = $categoryData['titles'][$titleIndex];
            $description = $categoryData['descriptions'][$titleIndex];

            $speakerName = $speakerNames[array_rand($speakerNames)];
            $status = $statuses[array_rand($statuses)];

            // Generate random date within last 3 months
            $createdAt = Carbon::now()->subDays(rand(1, 90));

            $proposals[] = [
                'name' => $speakerName,
                'email' => 'speaker' . $emailCounter . '@example.com',
                'talk_title' => $title,
                'talk_description' => $description,
                'category' => $category,
                'status' => $status,
                'created_at' => $createdAt->format('Y-m-d H:i:s'),
                'updated_at' => $createdAt->format('Y-m-d H:i:s'),
            ];

            $emailCounter++;
        }

        // Shuffle to randomize order
        shuffle($proposals);

        TalkProposal::insert($proposals);
    }
}
