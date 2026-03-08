// src/components/AdvantageItem.tsx
import { Icon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: Icon;
};

export default function AdvantageItem({ title, description, icon: IconComponent }: Props) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <IconComponent size={32} color="#B59C82" className="flex-shrink-0" />
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}