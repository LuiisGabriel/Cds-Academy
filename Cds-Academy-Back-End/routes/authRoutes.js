import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();
const authController = new AuthController();

router.post('/auth/signup', (req, res) => authController.signup(req, res));
router.post('/auth/signin', (req, res) => authController.signin(req, res));
router.get('/auth/me', (req, res) => authController.getCurrentUser(req, res));
router.post('/auth/admin/signup', (req, res) => authController.adminSignup(req, res));
router.post('/auth/admin/signin', (req, res) => authController.adminSignin(req, res));
router.get('/auth/admin/me', (req, res) => authController.getCurrentAdminUser(req, res));
router.post('/auth/createVideo', (req, res) => authController.createVideo(req, res));

export default router;