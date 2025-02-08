import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps extends React.ComponentProps<typeof Card> {
  icon: React.ReactNode;
  title: string;
  content: string;
  headerProps?: React.ComponentProps<typeof CardHeader>;
  titleProps?: React.ComponentProps<typeof CardTitle>;
  contentProps?: React.ComponentProps<typeof CardContent>;
}

export default function InfoCard({
  icon,
  title,
  content,
  headerProps,
  titleProps,
  contentProps,
  ...props
}: FeatureCardProps) {
  return (
    <Card {...props}>
      <CardHeader {...headerProps}>
        {icon}
        <CardTitle {...titleProps}>{title}</CardTitle>
      </CardHeader>
      <CardContent {...contentProps}>{content}</CardContent>
    </Card>
  );
}
