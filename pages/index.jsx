import HomeStyles from "../styles/Home.module.scss";
import Image from "next/image";
import TodoImage from "../public/todo.png"
export default function Home() {
  return (
    <div className={HomeStyles.container}>
      <div className={HomeStyles.decriptionCont}>
        <p className={HomeStyles.descriptionText}>
          Introducing TO DO APP – Your Ultimate Task Management Companion! ApTO DO APP is a revolutionary task management app designed to empower you
          in taking charge of your daily life and achieving your goals
          effortlessly. Whether you're a busy professional, a student, or a
          stay-at-home parent, TO DO APP is here to simplify your tasks and
          bring order to your hectic schedule. Key Features: Intuitive Task
          Organization: Say goodbye to chaos and hello to organized bliss. Our
          app allows you to categorize tasks into customizable lists, making it
          easy to prioritize and manage your to-dos according to your unique
          preferences. Smart Task Reminders: Never miss a deadline again. ApTO DO APP sends you intelligent reminders at just the right time, ensuring
          that important tasks stay front and center, even when life gets busy.
          Effortless Collaboration: Need to coordinate tasks with family,
          friends, or colleagues? Our app lets you seamlessly share lists and
          collaborate in real-time, keeping everyone on the same page and
          boosting productivity. Time Tracking and Analytics: Gain insights into
          your productivity patterns. With TO DO APP's time tracking and
          analytics, you can visualize your progress, identify trends, and make
          informed adjustments to optimize your workflow. Personalized Themes
          and Customization: Make TO DO APP truly yours. Choose from a variety
          of visually appealing themes and customize the app's appearance to
          match your style and preferences. Cross-Device Sync: Access your
          to-dos anytime, anywhere. With seamless cross-device synchronization,
          your tasks are readily available on your smartphone, tablet, and
          computer, ensuring you're always in control. Subtasks and
          Dependencies: Break down complex tasks into manageable steps. ApTO DO APP enables you to create subtasks and task dependencies, helping
          you tackle even the most ambitious projects with ease. In-App Notes
          and Attachments: Keep all relevant information in one place. Attach
          notes, files, and images to your tasks, ensuring you have everything
          you need to accomplish them successfully. Experience the joy of a
          clutter-free life with TO DO APP. Download now and embark on a
          journey to enhanced productivity, increased focus, and a sense of
          accomplishment like never before. Join the TO DO APP community today
          and let us guide you toward a more organized and fulfilling future.
        </p>
      </div>
      <div className={HomeStyles.imgWrapper}>
        <Image src={TodoImage} alt="TO DO IMAGE" className={HomeStyles.img}/>
      </div>
    </div>
  );
}
