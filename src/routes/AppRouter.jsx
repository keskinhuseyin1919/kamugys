import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// 1. Layout Yapıları
import AdminLayout from '../layouts/AdminLayout';
import UserLayout from '../layouts/UserLayout'; 

// 2. Admin Sayfaları
import AdminDashboard from '../pages/admin/AdminDashboard';
import UserManagement from '../pages/admin/UserManagement';
import InstitutionManagement from '../pages/admin/InstitutionManagement';
import CurriculumManagement from '../pages/admin/CurriculumManagement';
import QuestionBank from '../pages/admin/QuestionBank';
import MaterialManagement from '../pages/admin/MaterialManagement';
import AnnouncementManagement from '../pages/admin/AnnouncementManagement';
import SupportManagement from '../pages/admin/SupportManagement';
import NotificationCenter from '../pages/admin/NotificationCenter';
import MockExamManagement from '../pages/admin/MockExamManagement'; // Yeni Eklendi

// 3. Kullanıcı Sayfaları
import UserDashboard from '../pages/user/UserDashboard';
import Exams from '../pages/user/Exams';
import MockExams from '../pages/user/MockExams'; // Adayın deneme gördüğü yer
import ExamResult from '../pages/user/ExamResult';
import Materials from '../pages/user/Materials';
import Statistics from '../pages/user/Statistics';
import Profile from '../pages/user/Profile';
import Support from '../pages/user/Support'; 
import Upgrade from '../pages/user/Upgrade'; 
import AnnouncementsPage from '../pages/user/AnnouncementsPage';
import AnnouncementDetail from '../pages/user/AnnouncementDetail';

// 4. Public Sayfalar
import Landing from '../pages/public/Landing';
import Auth from '../pages/public/Auth';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ==========================================
            HALKA AÇIK SAYFALAR
           ========================================== */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth />} />

        {/* ==========================================
            ADMİN KOMUTA MERKEZİ (AdminLayout)
           ========================================== */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="institutions" element={<InstitutionManagement />} />
          <Route path="curriculum" element={<CurriculumManagement />} />
          <Route path="questions" element={<QuestionBank />} />
          
          {/* DENEME SINAVI YÖNETİMİ BURADA */}
          <Route path="mock-exams" element={<MockExamManagement />} /> 
          
          <Route path="materials" element={<MaterialManagement />} />
          <Route path="announcements" element={<AnnouncementManagement />} />
          <Route path="support" element={<SupportManagement />} />
          <Route path="notifications" element={<NotificationCenter />} />
        </Route>

        {/* ==========================================
            KULLANICI PANELİ (UserLayout)
           ========================================== */}
        <Route path="/panel" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          
          <Route path="exams" element={<Exams />} />
          <Route path="mock-exams" element={<MockExams />} />
          <Route path="exam-result" element={<ExamResult />} /> 
          
          <Route path="materials" element={<Materials />} />
          <Route path="stats" element={<Statistics />} />
          
          <Route path="profile" element={<Profile />} />
          <Route path="support" element={<Support />} />
          <Route path="upgrade" element={<Upgrade />} /> 
          
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="announcements/:id" element={<AnnouncementDetail />} />
        </Route>

        {/* HATA DURUMUNDA VİTRİNE AT */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}