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
  {label: 'Introduction', path: '/', component: Introduction},
  {label: 'Authorship', path: '/authorship', component: Authorship},
  {label: 'Copyright', path: '/copyright', component: Copyright},
  {label: 'Plagiarism', path: '/plagiarism', component: Plagiarism},
  {label: 'Acknowledgement', path: '/acknowledgement', component: Acknowledgement},
  {label: 'Payment', path: '/payment', component: Payment},
  {label: 'Deadline', path: '/deadline', component: Deadline},
  {label: 'Process', path: '/process', component: Process},
  {label: 'Application', path: '/application', component: Application},
]
