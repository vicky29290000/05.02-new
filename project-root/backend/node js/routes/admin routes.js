const express = require('E:/05.02/project-root/backend/node js/routes/admin routes.js');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protect the routes to ensure only admins can access them
router.use(authMiddleware.isAdmin);

router.get('/dashboard', adminController.getAdminDashboard);
router.get('/users', adminController.manageUsers);
router.get('/files', adminController.manageFiles);
router.delete('/files/:fileId', adminController.deleteFile);

module.exports = router;
