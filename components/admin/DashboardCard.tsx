type DashboardCardProps = {
  title: string;
  value: string | number;
  description: string;
};

export default function DashboardCard({
  title,
  value,
  description,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-800">
        {value}
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}