import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { siteName } from '../utils/constants';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Helmet>
        <title>{t('about.title')} - {siteName}</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">{t('about.title')}</h1>
      <div className="prose dark:prose-invert">
        {/* 在此添加具体的关于页面内容 */}
        <p>{t('about.description')}</p>
      </div>
    </div>
  );
}