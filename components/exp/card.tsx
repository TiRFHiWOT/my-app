import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export function CategoryCard({ icon: Icon, label, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center w-32 h-28 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="w-10 h-10 flex items-center justify-center text-blue-600">
        <Icon className="w-6 h-6" />
      </div>
      <span className="mt-1 text-xs font-medium text-gray-600 text-center px-1">
        {label}
      </span>
    </Link>
  );
}
