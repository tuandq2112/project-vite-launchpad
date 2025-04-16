import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/global-config';

import { ProjectView } from 'src/sections/projects/project-view';

// ----------------------------------------------------------------------

const metadata = { title: `Projects | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ProjectView />
    </>
  );
}
