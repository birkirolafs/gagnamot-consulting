import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'is' : 'en')}
      className="fixed top-4 right-4 z-50"
    >
      {language === 'en' ? 'IS' : 'EN'}
    </Button>
  );
};
