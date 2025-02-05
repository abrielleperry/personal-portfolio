import CounterStats from "./CounterStats";

interface StatsProps {
  isActive: boolean;
}

export default function Stats({ isActive }: StatsProps) {
  return (
    <div className="bg-white flex flex-row">
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=abrielleperry&layout=compact&theme=light&langs_count=20&hide_progress=true&include_all_commits=true&hide=assembly,m,objective-c,perl,php"
        alt="Top Languages"
        className="rounded-xl  "
      />

      <CounterStats isVisible={isActive} />
    </div>
  );
}
