"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6 md:p-8 mb-6"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border-color)",
      }}
    >
      <h2
        className="text-lg md:text-xl font-black mb-4"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>
      <div
        className="text-sm leading-relaxed space-y-3"
        style={{ color: "var(--text-muted)" }}
      >
        {children}
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-sm font-bold mt-5 mb-2"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-secondary)" }}
    >
      {children}
    </h3>
  );
}

function CalFitDetails() {
  const sections = [
    {
      title: "1. Overview & Architecture",
      content: (
        <>
          <p>
            CalFit is a full-featured fitness and nutrition app powered by AI. Users can generate
            personalized workouts and meal plans, track calories and macros, log sleep and body
            measurements, manage intermittent fasting, chat with an AI coach (with voice input),
            partner with friends for accountability, scan food with the camera, and monitor
            progress with detailed analytics and exportable reports.
          </p>
          <SubHeading>State Management (Zustand)</SubHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <th className="py-2 pr-4 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Store</th>
                  <th className="py-2 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>authStore</td>
                  <td className="py-2">User, session, profile, onboarding status, live steps count</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>themeStore</td>
                  <td className="py-2">Light/dark color scheme</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>aiCoachStore</td>
                  <td className="py-2">Current AI workout, saved workouts, chat messages, loading state</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>mealPlanStore</td>
                  <td className="py-2">Current AI meal plan, saved plans, loading state</td>
                </tr>
              </tbody>
            </table>
          </div>
          <SubHeading>Key Services</SubHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <th className="py-2 pr-4 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Service</th>
                  <th className="py-2 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>supabase.ts</td>
                  <td className="py-2">Supabase client with cross-platform storage</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>nvidia-client.ts</td>
                  <td className="py-2">All NVIDIA AI API calls</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>foodSearchService.ts</td>
                  <td className="py-2">Open Food Facts API + Nigerian local food DB</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>profileService.ts</td>
                  <td className="py-2">Profile CRUD, daily queries</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>notificationService.tsx</td>
                  <td className="py-2">In-app notification CRUD</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>reminderService.ts</td>
                  <td className="py-2">Scheduled local notifications</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>aiAnalysisService.ts</td>
                  <td className="py-2">Workout trend analysis & predictions</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>imageService.ts</td>
                  <td className="py-2">Camera/gallery picking, avatar upload</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>VoiceRecorderService.ts</td>
                  <td className="py-2">Audio recording + Deepgram transcription</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>stepService.ts</td>
                  <td className="py-2">Pedometer subscription, step data persistence</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "2. Navigation Structure",
      content: (
        <>
          <p>The app uses React Navigation v7 with conditional stacks based on auth state.</p>
          <SubHeading>Root Level</SubHeading>
          <div
            className="p-4 rounded-xl text-xs font-mono whitespace-pre leading-relaxed mb-4"
            style={{ background: "var(--bg-code-tag)", color: "var(--text-muted)" }}
          >
{`NavigationContainer
  ├── user && !isOnboarding → AppStack
  └── otherwise → AuthStack`}
          </div>
          <SubHeading>4 Tab Navigator + Floating Radial Menu</SubHeading>
          <p>
            <strong style={{ color: "var(--text-secondary)" }}>Home</strong> — Dashboard with stats, streaks, quick-log buttons
          </p>
          <p>
            <strong style={{ color: "var(--text-secondary)" }}>Calorie</strong> — Daily calorie tracking, macros, water intake
          </p>
          <p>
            <strong style={{ color: "var(--text-secondary)" }}>AI Coach</strong> — Generate workouts, saved plans, chat with AI
          </p>
          <p>
            <strong style={{ color: "var(--text-secondary)" }}>Notes</strong> — Full CRUD journal with AI integration
          </p>
          <p>
            The center <strong style={{ color: "var(--accent-primary)" }}>"+"</strong> button opens a radial menu with: Activity, Health, Meal Plans, Progress, Scan Food.
          </p>
        </>
      ),
    },
    {
      title: "3. Auth Flow",
      content: (
        <>
          <p>
            CalFit uses <strong style={{ color: "var(--accent-primary)" }}>anonymous authentication</strong> — no email, no
            password, no social login required. Users tap "Get Started", complete a 5-step
            onboarding wizard, and an anonymous Supabase session is created automatically.
            Sessions persist via SecureStore (native) or localStorage (web) for return visits.
          </p>
        </>
      ),
    },
    {
      title: "4. Dashboard (HomeScreen)",
      content: (
        <>
          <p>Central command center showing the user&apos;s fitness status at a glance:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Greeting header with user name, notification bell, avatar</li>
            <li>ComebackBanner — detects 2+ days inactivity, encourages return</li>
            <li>BurnoutBanner — alerts when sleep is low and activity is high</li>
            <li>StreakRow — weekly calendar with ring-shaped day dots</li>
            <li>HeroCarousel — 3 auto-scrolling slides (Calories, Macros, Stats)</li>
            <li>StatCards — water, steps, sleep progress</li>
            <li>QuickLog buttons — +Food, +Water, +Sleep, Workout</li>
            <li>Accountability Partners card + Streaks card</li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Workouts & Activity",
      content: (
        <>
          <p>
            48 bodyweight exercises across 8 categories (Chest, Back, Legs, Shoulders, Arms, Core,
            Cardio, Full Body), each with duration, calorie burn rate, difficulty, muscle groups,
            equipment needs, and step-by-step instructions.
          </p>
          <SubHeading>QuickStart Workout Session</SubHeading>
          <ul className="list-disc list-inside space-y-1">
            <li>Timer counts workout duration</li>
            <li>TTS voice cues announce exercise name, duration, countdown</li>
            <li>Auto-advance between exercises with 3s rest</li>
            <li>Animated exercise demos with countdown</li>
            <li>AI workout support with sets/reps/rest/form tips</li>
            <li>Auto-save to workout_sessions on completion</li>
          </ul>
          <SubHeading>AnalysisScreen</SubHeading>
          <p>
            Period selector (7d, 30d, 90d) with total sessions, calories, duration, streak
            tracking, weekly breakdown charts, category distribution, trend analysis, goal
            prediction, milestone progress, AI-generated suggestions, and PDF export.
          </p>
        </>
      ),
    },
    {
      title: "6. AI Coach",
      content: (
        <>
          <p>Three-tab interface providing AI-powered fitness guidance:</p>
          <SubHeading>Generate</SubHeading>
          <p>
            Workout form: fitness level, goals, duration, equipment. AI generates a complete
            workout with warmup, exercises (sets/reps/rest/form tips), and cooldown. Save or
            regenerate. Results cached for 5 minutes.
          </p>
          <SubHeading>Saved</SubHeading>
          <p>List of previously saved AI-generated workouts with delete option.</p>
          <SubHeading>Chat</SubHeading>
          <p>
            Full conversational AI coach with message bubbles, voice mic input (Deepgram STT),
            suggested prompt chips, chat history persisted to Supabase. AI can inline-generate
            workouts from chat commands. System prompt: certified fitness coach with 15 years
            experience.
          </p>
        </>
      ),
    },
    {
      title: "7. Calorie & Nutrition Tracking",
      content: (
        <>
          <p>
            Daily calorie tracking hub with hero card showing consumed vs goal, recipe suggestions
            based on remaining macros, macro progress bars (protein/carbs/fat), water intake with
            +250ml quick-add, and meal sections for Breakfast, Lunch, Dinner, Snacks.
          </p>
          <SubHeading>Food Database</SubHeading>
          <p>
            Search via Open Food Facts API with fallback to a built-in Nigerian local food
            database (25 entries: Jollof Rice, Egusi Soup, Suya, Moi Moi, etc.) and AI lookup
            via NVIDIA for any typed food. 7-day calorie trend chart included.
          </p>
        </>
      ),
    },
    {
      title: "8. Meal Plans (AI-Generated)",
      content: (
        <>
          <p>
            7-step guided questionnaire covering health goal, budget, cuisine preference (Nigerian,
            Italian, Asian, etc.), dietary preferences, meals per day, excluded foods, and calorie
            target. Generates via NVIDIA AI with local Nigerian ingredient knowledge. Plans
            include title, description, daily calories, budget level, meals with macros, and AI
            notes.
          </p>
        </>
      ),
    },
    {
      title: "9. Health Tracking",
      content: (
        <>
          <p>
            <strong style={{ color: "var(--text-secondary)" }}>Steps</strong> — Pedometer via expo-sensors,
            live count in Zustand store, saved every 60s to step_logs, goal notifications.
          </p>
          <p>
            <strong style={{ color: "var(--text-secondary)" }}>Water Intake</strong> — Quick-add +250ml from
            dashboard or calorie screen, configurable daily goal, visual progress bar.
          </p>
        </>
      ),
    },
    {
      title: "10. Intermittent Fasting",
      content: (
        <>
          <p>
            Protocol selection: 16:8, 18:6, 20:4, 24hr, 5:2. Active timer with progress ring.
            Logged to fasting_logs table. Accessible from the Health tab.
          </p>
        </>
      ),
    },
    {
      title: "11. Journal (Notes)",
      content: (
        <>
          <p>
            Full CRUD journal with welcome view, rich editor (title, date, content), toolbar
            with "Send to AI Coach" for discussing entries, save/share/delete. Slide-out sidebar
            drawer for navigation. Synced to Supabase notes table.
          </p>
        </>
      ),
    },
    {
      title: "12. Accountability Partners",
      content: (
        <>
          <p>
            Add up to 3 partners by CalFit ID. Bidirectional partner connections. Shared
            dashboard with side-by-side streak comparison (VS bar). Shared goals via modal.
            Milestone notifications at 7, 14, 21, 30, 60, 90, 100 days.
          </p>
          <SubHeading>PartnerChat</SubHeading>
          <p>
            Real-time messaging via Supabase Realtime subscriptions with read receipts and push
            notifications on new messages.
          </p>
        </>
      ),
    },
    {
      title: "13. Progress & Analytics",
      content: (
        <>
          <p>
            Comprehensive dashboard with period selector (Week, Month, 3 Months, Year). Calorie
            consumed vs burned chart, workout stats, water/sleep averages, step counts, weight
            tracking, BMI display, body measurements comparison, recent workouts, streak count,
            and PDF export.
          </p>
          <SubHeading>RecapScreen</SubHeading>
          <p>
            Shareable recap cards with 5 design templates (Bold, Gradient, Dark, Sunrise,
            Minimal) and Daily/Weekly/Monthly recaps. Image export via react-native-view-shot.
          </p>
        </>
      ),
    },
    {
      title: "14. Streaks & Milestones",
      content: (
        <>
          <p>
            Current streak with day dots, milestone badges at 3, 7, 14, 30, 60, 90, 180, 365
            days with emoji celebrations, partner comparison, weekly calendar view, and daily
            push reminder. Streak logic: daily check-in increments, missed day resets.
          </p>
        </>
      ),
    },
    {
      title: "15. Sleep Tracking",
      content: (
        <>
          <p>
            Log sleep hours (1–12, 0.5 increments), quality rating (1–5 with emoji), notes
            field, 7-day bar chart history, goal progress, average hours calculation. Stored
            in sleep_logs table.
          </p>
        </>
      ),
    },
    {
      title: "16. Body Measurements",
      content: (
        <>
          <p>
            Track chest, waist, hips, arms, thighs, neck, and body fat %. Form fields with
            historical measurements list and trend indicators (up/down arrows). Stored in
            body_measurements table.
          </p>
        </>
      ),
    },
    {
      title: "17. Food Scanner (AI Vision)",
      content: (
        <>
          <p>
            Camera capture via expo-camera or gallery pick via expo-image-picker. Sends base64
            JPEG to NVIDIA Llama 3.2 90B Vision model via Supabase Edge Function proxy. Returns
            detected food items with calories, protein, carbs, fat, and serving size. Results
            shown in card UI with "Log Food" button.
          </p>
        </>
      ),
    },
    {
      title: "18. Notifications",
      content: (
        <>
          <p>
            9 notification types: achievement, social, streak, upgrade, coach, community, goal,
            system, welcome. Filter by type, mark as read, mark all read, delete. Trigger
            functions throughout the app for workouts, streaks, food logging, water/calorie
            goals, coach responses, partner messages, and more.
          </p>
          <SubHeading>Scheduled Reminders</SubHeading>
          <p>
            Meal, water, workout, sleep, and streak reminders scheduled as daily local
            notifications via expo-notifications. Toggleable from Settings.
          </p>
        </>
      ),
    },
    {
      title: "19. Settings & Profile",
      content: (
        <>
          <p>
            Profile card with name and avatar, notification preferences (toggled via
            SecureStore), theme toggle (light/dark), navigation items for Privacy Policy, Goals,
            Equipment Preferences, Download My Data, and Subscription. Account actions include
            Sign Out and Delete Account. Editable fields: name, username, height, weight, goal,
            activity level, dietary preferences, and all daily goals.
          </p>
          <SubHeading>Equipment Preferences</SubHeading>
          <p>Select available equipment for AI workout generation.</p>
          <SubHeading>Download My Data</SubHeading>
          <p>Export all user data as CSV or text report.</p>
        </>
      ),
    },
    {
      title: "20. Subscription & Monetization",
      content: (
        <>
          <p>
            Three tiers (Starter, Pro, Premium) displayed in a subscription screen. Currently
            all features are free — the infrastructure, tier display, and upgrade prompts are in
            place and ready for App Store/Play Store IAP deployment.
          </p>
        </>
      ),
    },
    {
      title: "21. Data Flow & Services",
      content: (
        <>
          <SubHeading>AI API Flow</SubHeading>
          <div
            className="p-3 rounded-xl text-xs font-mono whitespace-pre leading-relaxed mb-4"
            style={{ background: "var(--bg-code-tag)", color: "var(--text-muted)" }}
          >
{`Client → Supabase Edge Function (ai-proxy)
       → NVIDIA API → Response
       → Edge Function → Client`}
          </div>
          <p>3 retries with exponential backoff (1s, 2s, 4s). Usage logged to ai_api_usage table. Hardcoded fallbacks if NVIDIA is unavailable.</p>
          <SubHeading>Voice Transcription Flow</SubHeading>
          <div
            className="p-3 rounded-xl text-xs font-mono whitespace-pre leading-relaxed mb-4"
            style={{ background: "var(--bg-code-tag)", color: "var(--text-muted)" }}
          >
{`Client (audio) → Edge Function (deepgram-proxy)
       → Deepgram API → Text
       → Client → AI Coach Chat`}
          </div>
          <SubHeading>Step Tracking Flow</SubHeading>
          <p>
            Pedometer sensor → expo-sensors → Zustand authStore.liveSteps → All screens →
            Saved to step_logs every 60s.
          </p>
        </>
      ),
    },
    {
      title: "22. Supabase Database Schema",
      content: (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <th className="py-2 pr-4 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Table</th>
                  <th className="py-2 pr-4 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Key Columns</th>
                  <th className="py-2 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["profiles", "id, calfit_id, full_name, goal, height_cm, weight_kg, daily_calorie_goal, step_goal, water_goal, sleep_goal, streak_count, last_active_date, avatar_url", "User profile and settings"],
                  ["food_logs", "id, user_id, food_name, calories, protein, carbs, fat, meal_type, logged_at", "Daily meal entries"],
                  ["water_logs", "id, user_id, amount_ml, logged_at", "Water intake records"],
                  ["workout_sessions", "id, user_id, name, status, calories_burned, duration_seconds, exercises, completed_at", "Completed workout sessions"],
                  ["workout_routines", "id, user_id, name, exercises, created_at", "Saved custom routines"],
                  ["step_logs", "id, user_id, steps, date", "Daily step counts"],
                  ["sleep_logs", "id, user_id, hours, quality, notes, date", "Sleep duration and quality"],
                  ["fasting_logs", "id, user_id, protocol, fast_hours, eating_hours, started_at, ended_at", "Fasting sessions"],
                  ["notifications", "id, user_id, type, title, body, read, created_at", "In-app notification inbox"],
                  ["ai_generated_workouts", "id, user_id, title, duration, difficulty, exercises, warmup, cooldown", "Saved AI workouts"],
                  ["ai_generated_meal_plans", "id, user_id, title, daily_calories, meals, budget_level", "Saved AI meal plans"],
                  ["chat_messages", "id, user_id, role, content, created_at", "AI Coach chat history"],
                  ["partner_messages", "id, sender_id, receiver_id, content, created_at, read", "Accountability chat"],
                  ["partners", "id, user_id, partner_id, status", "Partner relationships"],
                  ["notes", "id, user_id, title, content, created_at", "Journal entries"],
                  ["body_measurements", "id, user_id, chest, waist, hips, arms, thighs, neck, body_fat, measured_at", "Body measurement history"],
                  ["ai_api_usage", "id, user_id, endpoint, model, tokens, latency, status", "AI API usage logging"],
                ].map(([table, cols, purpose]) => (
                  <tr key={table} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td className="py-2 pr-4 font-mono whitespace-nowrap" style={{ color: "var(--accent-primary)" }}>{table}</td>
                    <td className="py-2 pr-4" style={{ maxWidth: "300px" }}><span className="text-[10px]">{cols}</span></td>
                    <td className="py-2">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SubHeading>Edge Functions</SubHeading>
          <p>
            <strong style={{ color: "var(--accent-primary)" }}>ai-proxy</strong> — Proxies NVIDIA AI calls
            (Llama 3.1 70B for chat/workout/meal gen, Llama 3.2 90B Vision for food scanning).
          </p>
          <p>
            <strong style={{ color: "var(--accent-primary)" }}>deepgram-proxy</strong> — Proxies audio
            transcription to Deepgram API.
          </p>
        </>
      ),
    },
    {
      title: "23. Theming & Design System",
      content: (
        <>
          <SubHeading>Color Palette</SubHeading>
          <p>
            <strong style={{ color: "#34D98A" }}>Primary:</strong> CalFit Green (#0DAE6C / #34D98A) — CTAs,
            active nav, coach buttons.
          </p>
          <p>
            <strong>Backgrounds:</strong> Light lavender (#F4F0FF), Dark indigo (#08061A)
          </p>
          <p>
            <strong>Gradients:</strong> Pink → Orange → Yellow for scan food banner, streak
            badges, primary CTAs.
          </p>
          <p>
            <strong>Macro colors:</strong> Protein (orange #FF6B35), Carbs (yellow #FFB830), Fat
            (blue #4A90E2)
          </p>
          <SubHeading>Typography</SubHeading>
          <p>
            Plus Jakarta Sans (Google Fonts) — 7 weights available. App uses 900 (black), 800
            (extrabold), 700 (bold), 600 (semibold).
          </p>
          <SubHeading>Responsive Design</SubHeading>
          <p>
            Web version centered in max-width 480px container (phone-like layout). Adaptive font
            sizing via moderateScale() based on 390px base width.
          </p>
          <SubHeading>Light/Dark Mode</SubHeading>
          <p>
            Toggle persisted in Zustand (default: light). Full separate color definitions with
            glass effect overlays and adaptive StatusBar.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="mb-8">
        <div
          className="rounded-2xl p-6"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Tagline
              </div>
              <p style={{ color: "var(--accent-primary)", fontWeight: 700 }}>
                Your personal AI-powered fitness and nutrition companion
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Platform
              </div>
              <p style={{ color: "var(--text-secondary)" }}>iOS, Android, Web (responsive, max-width 480px)</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Tech Stack
              </div>
              <p style={{ color: "var(--text-secondary)" }}>React Native 0.81.5 + Expo SDK 54 + TypeScript 5.9</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Backend
              </div>
              <p style={{ color: "var(--text-secondary)" }}>Supabase (PostgreSQL, Auth, Realtime, Edge Functions)</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                AI
              </div>
              <p style={{ color: "var(--text-secondary)" }}>NVIDIA Llama 3.1 70B (chat/workout/meal gen) + Llama 3.2 90B Vision (food scanner)</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Voice
              </div>
              <p style={{ color: "var(--text-secondary)" }}>Deepgram STT + expo-speech (TTS workout cues)</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Developer
              </div>
              <p style={{ color: "var(--text-secondary)" }}>AOT (aotnetworklabs@gmail.com)</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                iOS / Android Build
              </div>
              <p style={{ color: "var(--text-secondary)" }}>Postponed (Web demo available now)</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background: "linear-gradient(135deg, rgba(52,217,138,0.08) 0%, var(--bg-primary) 100%)",
          border: "1px solid rgba(52,217,138,0.25)",
        }}
      >
        <div className="text-[10px] uppercase tracking-widest mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
          Key Differentiators
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "100% Anonymous — No email/password/social sign-up required",
            "AI-First — AI generates workouts, meal plans, food recognition, coaching",
            "Localized for Nigeria — AI knows local ingredients, markets, pricing",
            "Multi-Platform — One codebase ships to iOS, Android, and Web",
            "Privacy-Focused — Minimal data collection, anonymous by default",
            "No Subscription Required — All features currently free",
            "Accountability Partners — Shared streaks and real-time chat",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span style={{ color: "#34D98A" }}>✦</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {sections.map((s) => (
          <SectionCard key={s.title} title={s.title}>
            {s.content}
          </SectionCard>
        ))}
      </div>

      <a
        href="https://medium.com/@aotayo/how-i-built-calfit-413b8a7ba002"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-sm font-bold py-4 px-6 rounded-xl transition-all"
        style={{
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.05em",
          border: "1px solid var(--border-color)",
          color: "var(--text-muted)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent-secondary)";
          e.currentTarget.style.color = "var(--accent-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-color)";
          e.currentTarget.style.color = "var(--text-muted)";
        }}
      >
        Read the full story: How I Built CalFit → Medium Blog Post
      </a>
    </>
  );
}

function AnalyzerBotDetails() {
  const sections = [
    {
      title: "1. Architecture Overview",
      content: (
        <>
          <p>
            The Analyzer Bot is a dual-component system: a <strong style={{ color: "var(--accent-primary)" }}>FastAPI Python backend</strong> (bot) and a <strong style={{ color: "var(--accent-primary)" }}>Next.js 14 dashboard</strong> (web), connected through Firebase Firestore and NVIDIA NIM AI APIs.
          </p>
          <div
            className="p-4 rounded-xl text-xs font-mono whitespace-pre leading-relaxed mb-4"
            style={{ background: "var(--bg-code-tag)", color: "var(--text-muted)" }}
          >
{`Telegram User → Telegram Bot Handler
       → SignalGenerator (4-TF Engine)
       → TradingViewClient (RapidAPI OHLCV)
       → Firebase Firestore → Telegram response

User sends screenshot → MultiModelPipeline
       → SignalGenerator (API data, parallel)
       → NvidiaVisionAnalyzer (Llama 3.2 11B Vision)
       → _verify_alignment() → score + adjusted confidence`}
          </div>
        </>
      ),
    },
    {
      title: "2. 4-Timeframe Signal Engine",
      content: (
        <>
          <p>
            The <strong style={{ color: "var(--accent-primary)" }}>SignalGenerator</strong> implements a four-level scalping framework for XAU/USD:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong style={{ color: "var(--text-secondary)" }}>Level 1 — Trend (1H + 4H):</strong> Counts HH/HL vs LH/LL across 10 candles. Both timeframes must agree on UP/DOWN/NEUTRAL.</li>
            <li><strong style={{ color: "var(--text-secondary)" }}>Level 2 — S/R (15M):</strong> Scans 20 candles for swing lows (support) and highs (resistance).</li>
            <li><strong style={{ color: "var(--text-secondary)" }}>Level 3 — Pullback (5M):</strong> Checks price within 10 pips of key level with low volatility (ATR ratio &lt; 5%).</li>
            <li><strong style={{ color: "var(--text-secondary)" }}>Level 4 — Entry (1M):</strong> Detects reversal candle (pin bar or engulfing pattern) for final entry trigger.</li>
          </ul>
          <p className="mt-3">
            Each signal builds 4 stacked entries with pyramiding: Entry 1 at market price with +20 pip TP (auto-close), then entries at -5/-10/-15 pips with TPs at +40/+60/+80 pips (manual). Base confidence starts at 0.75.
          </p>
        </>
      ),
    },
    {
      title: "3. Dual-Model AI Verification Pipeline",
      content: (
        <>
          <p>
            The <strong style={{ color: "var(--accent-primary)" }}>MultiModelPipeline</strong> coordinates dual-verification between algorithmic API data and AI vision analysis:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong style={{ color: "var(--text-secondary)" }}>API-Only Mode:</strong> Runs SignalGenerator alone, returns signal with <code style={{ color: "var(--accent-primary)" }}>verified: false</code>.</li>
            <li><strong style={{ color: "var(--text-secondary)" }}>API + Screenshot Mode:</strong> Runs both in parallel, then computes an alignment score.</li>
          </ul>
          <p className="mt-3">
            <strong style={{ color: "var(--text-secondary)" }}>Alignment Scoring:</strong> Support mismatch &gt; 0.5% (-15), resistance mismatch &gt; 0.5% (-15), trend mismatch (-20), trend match (+10), low vision confidence &lt; 50% (-20). Score clamped to 0-100, then mapped: ≥ 80 → +15% confidence boost, ≥ 60 → +5%, &lt; 40 → -10% penalty.
          </p>
        </>
      ),
    },
    {
      title: "4. Telegram Bot Commands",
      content: (
        <>
          <p>Seven commands implemented with <strong style={{ color: "var(--accent-primary)" }}>python-telegram-bot</strong> v20+:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <th className="py-2 pr-4 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Command</th>
                  <th className="py-2 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["/signal", "Generate API-based signal via 4-TF engine, save to Firestore"],
                  ["/log_trade", "4-step conversation: entry → exit → result → confirm with PnL"],
                  ["/journal", "Free-text trading journal entry saved to Firestore"],
                  ["/stats", "Display win rate, P&L, total signals from Firestore"],
                  ["/dashboard", "Inline button linking to the web dashboard"],
                  ["/analyze", "Upload a chart screenshot for dual-model verification"],
                  ["/clear", "Reset chat history"],
                  ["/help", "List all commands with usage examples"],
                ].map(([cmd, desc]) => (
                  <tr key={cmd} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td className="py-2 pr-4 font-mono whitespace-nowrap" style={{ color: "var(--accent-primary)" }}>{cmd}</td>
                    <td className="py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "5. Dashboard — Analytics & Learning Hub",
      content: (
        <>
          <p>
            The <strong style={{ color: "var(--accent-primary)" }}>Next.js 14 dashboard</strong> provides real-time trading intelligence with five main pages:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong style={{ color: "var(--text-secondary)" }}>Dashboard Overview:</strong> KPI cards, cumulative P&L chart (Recharts), recent trades (auto-refresh 30s).</li>
            <li><strong style={{ color: "var(--text-secondary)" }}>Trades:</strong> Full trade log with result and date range filters.</li>
            <li><strong style={{ color: "var(--text-secondary)" }}>Analytics:</strong> 4-tab view — Performance, Screenshot, Verification, Trade Insights.</li>
            <li><strong style={{ color: "var(--text-secondary)" }}>Signals & Journal:</strong> Active signals table and journal entries with tag filters.</li>
            <li><strong style={{ color: "var(--accent-primary)" }}>Learning Hub:</strong> Nvidia-powered Q&A chatbot + chart upload for AI analysis.</li>
          </ul>
          <p className="mt-3">
            API routes proxy to the bot backend and NVIDIA NIM directly. Firebase Web SDK reads from the same Firestore collections the bot writes to, ensuring real-time sync between Telegram and the web interface.
          </p>
        </>
      ),
    },
    {
      title: "6. Tech Stack & Infrastructure",
      content: (
        <>
          <p>
            <strong style={{ color: "var(--accent-primary)" }}>Backend:</strong> FastAPI (Python) with per-collection Firestore data layer (signals, trades, journal, logs), TradingView RapidAPI client, NVIDIA NIM vision/LLM integration.
          </p>
          <p>
            <strong style={{ color: "var(--accent-primary)" }}>Frontend:</strong> Next.js 14 App Router, Tailwind CSS, Recharts, Firebase Web SDK, TypeScript.
          </p>
          <p>
            <strong style={{ color: "var(--accent-primary)" }}>AI Models:</strong> Llama 3.2 11B Vision (chart analysis), Llama 3.3 70B Instruct (trade strategy), Llama 3.1 8B Instruct (fallback processor) — all via NVIDIA NIM free tier.
          </p>
          <p>
            <strong style={{ color: "var(--accent-primary)" }}>Database:</strong> Firebase Firestore with camelCase fields matching TypeScript types across Python, seed scripts, and frontend.
          </p>
          <p>
            <strong style={{ color: "var(--accent-primary)" }}>Deployment:</strong> Backend on Railway (Nixpacks, polling mode), frontend on Vercel. Health check at <code style={{ color: "var(--accent-primary)" }}>/health</code>.
          </p>
        </>
      ),
    },
    {
      title: "7. Trading Strategy — XAU/USD Scalping",
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl" style={{ background: "var(--bg-code-tag)", border: "1px solid var(--border-color)" }}>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>Instrument</div>
              <p className="text-sm font-bold" style={{ color: "var(--accent-primary)" }}>XAU/USD (Gold)</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "var(--bg-code-tag)", border: "1px solid var(--border-color)" }}>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>Approach</div>
              <p className="text-sm font-bold" style={{ color: "var(--text-secondary)" }}>Scalping — 4-leg pyramiding</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "var(--bg-code-tag)", border: "1px solid var(--border-color)" }}>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>Entry 1</div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Market price, TP +20 pips, <strong style={{ color: "#22c55e" }}>Auto-close</strong></p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "var(--bg-code-tag)", border: "1px solid var(--border-color)" }}>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>Entry 2-4</div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Price -5/-10/-15 pips, TP +40/+60/+80 pips, <strong style={{ color: "var(--accent-primary)" }}>Manual</strong></p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "var(--bg-code-tag)", border: "1px solid var(--border-color)" }}>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>Risk</div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Max hold 5 min, lot size 0.01, signal valid 3h</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "var(--bg-code-tag)", border: "1px solid var(--border-color)" }}>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>Rate Limit</div>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>150 requests/month (free tier cap)</p>
            </div>
          </div>
          <p>
            All four entry conditions must be true: 1H/4H trend agreement, price at 15M S/R level, 5M pullback in progress within 10 pips, and a 1M reversal candle. One signal per candle cycle.
          </p>
        </>
      ),
    },
    {
      title: "8. Firestore Data Layer",
      content: (
        <>
          <p>Per-collection wrapper classes ensure consistent camelCase fields across backend, seed scripts, and frontend:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <th className="py-2 pr-4 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Collection</th>
                  <th className="py-2 pr-4 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Class</th>
                  <th className="py-2 text-left font-bold" style={{ color: "var(--text-secondary)" }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["signals", "SignalsDB", "Save/query/update trading signals"],
                  ["trades", "TradesDB", "Persist trades with PnL"],
                  ["journal", "JournalDB", "Free-text trading journal"],
                  ["signals_sent_log", "LogsDB", "Audit trail for all bot commands"],
                ].map(([col, cls, purpose]) => (
                  <tr key={col} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--accent-primary)" }}>{col}</td>
                    <td className="py-2 pr-4 font-mono" style={{ color: "var(--text-secondary)" }}>{cls}</td>
                    <td className="py-2">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="mb-8">
        <div
          className="rounded-2xl p-6"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Tagline
              </div>
              <p style={{ color: "var(--accent-primary)", fontWeight: 700 }}>
                XAU/USD scalp bot — dual-model Nvidia AI verification
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Platform
              </div>
              <p style={{ color: "var(--text-secondary)" }}>Telegram + Web Dashboard</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Backend
              </div>
              <p style={{ color: "var(--text-secondary)" }}>FastAPI (Python) + Firebase Firestore</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Frontend
              </div>
              <p style={{ color: "var(--text-secondary)" }}>Next.js 14 + Tailwind CSS + Recharts</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                AI Models
              </div>
              <p style={{ color: "var(--text-secondary)" }}>Llama 3.2 11B Vision + Llama 3.3 70B (NVIDIA NIM)</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Live Links
              </div>
              <p style={{ color: "var(--text-secondary)" }}>
                <a href="https://analyzer-dashboard-kohl.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-primary)" }}>Dashboard</a>
                {" · "}
                <a href="https://t.me/aot_analyzer_bot" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-primary)" }}>Telegram Bot</a>
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
                Developer
              </div>
              <p style={{ color: "var(--text-secondary)" }}>AOT (aotnetworklabs@gmail.com)</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rounded-2xl p-6 mb-8"
        style={{
          background: "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, var(--bg-primary) 100%)",
          border: "1px solid rgba(245,158,11,0.25)",
        }}
      >
        <div className="text-[10px] uppercase tracking-widest mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-dim)" }}>
          Key Differentiators
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Dual-Model AI Verification — Algorithmic + Vision AI in one pipeline",
            "4-Timeframe Scalping Engine — 1H/4H trend, 15M S/R, 5M pullback, 1M entry",
            "Telegram-Native Interface — Commands, inline keyboards, conversation flows",
            "Real-Time Dashboard — Live Firestore sync between Telegram and web",
            "Fully Zero-Cost AI — All models run on NVIDIA NIM free tier",
            "Self-Contained Architecture — No dependencies on paid APIs or services",
            "Comprehensive Audit Trail — Every command logged to Firestore",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span style={{ color: "#f59e0b" }}>✦</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {sections.map((s) => (
          <SectionCard key={s.title} title={s.title}>
            {s.content}
          </SectionCard>
        ))}
      </div>

      <a
        href="https://t.me/aot_analyzer_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-sm font-bold py-4 px-6 rounded-xl transition-all"
        style={{
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.05em",
          border: "1px solid var(--border-color)",
          color: "var(--text-muted)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent-secondary)";
          e.currentTarget.style.color = "var(--accent-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-color)";
          e.currentTarget.style.color = "var(--text-muted)";
        }}
      >
        Try the Bot on Telegram → @aot_analyzer_bot
      </a>
    </>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const p = project;

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-12 transition-colors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--text-dim)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-dim)")
          }
        >
          ← Back to projects
        </Link>

        <div
          className="w-full h-64 md:h-80 rounded-2xl mb-10 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg,${p.accent}15 0%, var(--bg-primary) 100%)`,
            border: `1px solid ${p.accent}20`,
          }}
        >
          {p.imageUrl ? (
            <Image
              src={p.imageUrl}
              alt={p.name}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--text-very-dim)",
                }}
              >
                Preview Coming Soon
              </span>
            </div>
          )}
        </div>

        <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] px-2.5 py-1 rounded-md"
              style={{
                background: `${p.accent}15`,
                color: p.accent,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {p.tag}
            </span>
            {p.status && (
              <span
                className={`text-[10px] px-2.5 py-1 rounded-md font-mono ${
                  p.status === "Live"
                    ? "bg-green-500/10 text-green-400"
                    : p.status === "Open"
                      ? "bg-fuchsia-500/10 text-fuchsia-400"
                      : "bg-purple-500/10 text-purple-400"
                }`}
              >
                {p.status}
              </span>
            )}
          </div>
          <span
            className="text-[10px] font-mono"
            style={{ color: "var(--text-dim)" }}
          >
            {p.year}
          </span>
        </div>

        <h1
          className="text-4xl md:text-6xl font-black mb-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "var(--text-primary)",
          }}
        >
          {p.name}
        </h1>

        <p
          className="text-base md:text-lg leading-relaxed mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          {p.id === "calfit"
            ? "A full-featured fitness and nutrition app powered by AI — personalized workouts, meal plans, calorie tracking, AI coach, food scanner, sleep/fasting/measurement tracking, accountability partners, and detailed analytics. One codebase ships to iOS, Android, and Web."
            : p.id === "analyzer-bot"
              ? "An XAU/USD scalp trading bot with dual-model Nvidia AI verification. The 4-timeframe engine analyzes trend, support/resistance, pullbacks, and entry candles. Users interact via Telegram commands and monitor live results on a real-time Next.js dashboard — all powered by NVIDIA NIM free-tier AI models."
              : p.description}
        </p>

        <div
          className="text-xs mb-8"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--text-dim)",
          }}
        >
          Role:{" "}
          <span style={{ color: "var(--text-muted)" }}>{p.role}</span>
        </div>

        {p.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {p.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[9px] px-2 py-0.5 rounded-md"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  background: "var(--bg-code-tag)",
                  color: "var(--accent-primary)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {p.liveUrl && p.id !== "calfit" && (
          <div
            className="mb-8 p-6 rounded-xl text-sm leading-relaxed"
            style={{
              background: `linear-gradient(135deg,${p.accent}08 0%, var(--bg-primary) 100%)`,
              border: `1px solid ${p.accent}25`,
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <strong style={{ color: "var(--text-primary)" }}>
              Try it live right now →
            </strong>
            <br className="mb-2" />
            Click the <strong style={{ color: "var(--accent-primary)" }}>
              Live Browser Demo
            </strong>{" "}
            button below and see it in action.
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] text-center text-sm font-bold py-3.5 rounded-xl transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.05em",
                border: "1px solid var(--border-color-strong)",
                color: "var(--accent-primary)",
                background: "rgba(var(--accent-rgb), 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.08)";
              }}
            >
              {p.id === "calfit" ? "Live Browser Demo" : "Live Demo"}
            </a>
          )}
          {p.githubUrl && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] text-center text-sm font-bold py-3.5 rounded-xl transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.05em",
                border: "1px solid var(--border-color-light)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-secondary)";
                e.currentTarget.style.color = "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color-light)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              View Source Code (GitHub)
            </a>
          )}
          {p.selarUrl && (
            <a
              href={p.selarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] text-center text-sm font-bold py-3.5 rounded-xl transition-all"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.05em",
                background: `linear-gradient(135deg, ${p.accent}, #a855f7)`,
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get Licensed Source Code
            </a>
          )}
        </div>

        {p.selarUrl && (
          <div
            className="mt-8 p-6 rounded-xl text-sm leading-relaxed"
            style={{
              background: "var(--bg-overlay)",
              border: "1px solid var(--border-color)",
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <strong style={{ color: "var(--text-primary)" }}>
              Want the full licensed source code?
            </strong>{" "}
            Purchase the complete source code with all features, access to
            updates, and commercial license. Perfect for launching your own
            fitness app.
          </div>
        )}

        {p.apkUrl && (
          <a
            href={p.apkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-center text-xs font-bold py-3 px-6 rounded-xl transition-all"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.05em",
              border: "1px solid var(--border-color-light)",
              color: "var(--text-muted)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-secondary)";
              e.currentTarget.style.color = "var(--accent-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color-light)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            Download APK
          </a>
        )}

        {p.id === "calfit" && <CalFitDetails />}
        {p.id === "analyzer-bot" && <AnalyzerBotDetails />}
      </div>
    </main>
  );
}
