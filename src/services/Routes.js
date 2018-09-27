import deployment from '../config/deployment';
import Introduction from '../routes/Introduction';
import Authorship from '../routes/Authorship';
import Copyright from '../routes/Copyright';
import Plagiarism from '../routes/Plagiarism';
import Acknowledgement from '../routes/Acknowledgement';
import Payment from '../routes/Payment';
import Deadline from '../routes/Deadline';
import Process from '../routes/Process';
import Application from '../routes/Application';

export default [
  {label: 'Introduction', path: deployment.prefix + '/', component: Introduction},
  {label: 'Authorship', path: deployment.prefix + '/authorship', component: Authorship},
  {label: 'Copyright', path: deployment.prefix + '/copyright', component: Copyright},
  {label: 'Plagiarism', path: deployment.prefix + '/plagiarism', component: Plagiarism},
  {label: 'Acknowledgement', path: deployment.prefix + '/acknowledgement', component: Acknowledgement},
  {label: 'Payment', path: deployment.prefix + '/payment', component: Payment},
  {label: 'Deadline', path: deployment.prefix + '/deadline', component: Deadline},
  {label: 'Process', path: deployment.prefix + '/process', component: Process},
  {label: 'Application', path: deployment.prefix + '/application', component: Application},
]
