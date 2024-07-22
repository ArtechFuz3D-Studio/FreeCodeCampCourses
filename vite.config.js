// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
  base: '/FreeCodeCampCourses/', // set the base path
  // other configurations

  resolve: {
    extensions: ['.js', '.ts'],
  },
  
  esbuild: {
    loader: 'js', // using 'js' loader for JavaScript
    include: [
      // include all .js, .ts files
      'src/**/*.js',

      // 'src/**/*.ts',
    ],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mozillaDevSynth: resolve(__dirname, 'src/JS/MozillaDev/Synth/index.html'),
        responsiveWebCafeMenu: resolve(__dirname, 'src/JS/ResponsiveWeb/CafeMenu/index.html'),
        responsiveWebCatPhotoApp: resolve(__dirname, 'src/JS/ResponsiveWeb/CatPhotoApp/index.html'),
        responsiveWebColoredMarkers: resolve(__dirname, 'src/JS/ResponsiveWeb/ColoredMarkers/index.html'),
        responsiveWebFlexboxPhotoGallery: resolve(__dirname, 'src/JS/ResponsiveWeb/FlexboxPhotoGallery/index.html'),
        responsiveWebNutritionLabel: resolve(__dirname, 'src/JS/ResponsiveWeb/NutritionLabel/index.html'),
        responsiveWebPiano: resolve(__dirname, 'src/JS/ResponsiveWeb/Piano/index.html'),
        responsiveWebRegistrationForm: resolve(__dirname, 'src/JS/ResponsiveWeb/RegistrationForm/index.html'),
        responsiveWebRothkoPainting: resolve(__dirname, 'src/JS/ResponsiveWeb/RothkoPainting/index.html'),
        responsiveWebSurveyForm: resolve(__dirname, 'src/JS/ResponsiveWeb/SurveyForm/index.html'),
        algDataStructMusicPlayer: resolve(__dirname, 'src/JS/Alg&DataStruct/MusicPlayer/index.html'),
        algDataStructRolePlayingGame: resolve(__dirname, 'src/JS/Alg&DataStruct/RolePlayingGame/index.html'),
        ytCoursesFrankLabsCoursePart01: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part01/index.html'),
        ytCoursesFrankLabsCoursePart02: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part02/index.html'),
        ytCoursesFrankLabsCoursePart03: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part03/index.html'),
        ytCoursesFrankLabsCoursePart04: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part04/index.html'),
        ytCoursesFrankLabsCoursePart05: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part05/index.html'),
        ytCoursesFrankLabsCoursePart06: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part06/index.html'),
        contact: resolve(__dirname, 'src/Contact/index.html')
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});

