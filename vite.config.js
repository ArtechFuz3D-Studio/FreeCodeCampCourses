// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
  base: '/FreeCodeCampCourses/', // set the base path
  // other configurations

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
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
        // all root paths must be resolved , the name should somewhat resemble the web url
        main: resolve(__dirname, 'index.html'),
        js: resolve(__dirname, 'src/JS/index.html'),
        mozillaDev: resolve(__dirname, 'src/JS/MozillaDev/index.html'),
        responsiveWeb: resolve(__dirname, 'src/JS/ResponsiveWeb/index.html'),
        algDataStruct: resolve(__dirname, 'src/JS/Alg&DataStruct/index.html'),
        ytCourses: resolve(__dirname, 'src/JS/YTCourses/index.html'),
        ytCoursesFrankLabsCourse: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/index.html'),
        ytCoursesFCC: resolve(__dirname, 'src/JS/YTCourses/FCC/index.html'),
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
        ytCoursesFrankLabsCoursePart07: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part07/index.html'),
        ytCoursesFrankLabsCoursePart08: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part08/index.html'),
        ytCoursesFrankLabsCoursePart09: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part09/index.html'),
        ytCoursesFrankLabsCoursePart10: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part10/index.html'),
        ytCoursesFrankLabsCoursePart11: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part11/index.html'),
        ytCoursesFCCPolyrythms: resolve(__dirname, 'src/JS/YTCourses/FCC/Polyrythms/index.html'),
        ytCoursesFCCProAudioAIGame: resolve(__dirname, 'src/JS/YTCourses/FCC/ProAudio-AIGame/index.html'),
        ytCoursesFCCAIGame: resolve(__dirname, 'src/JS/YTCourses/FCC/AIGame/index.html'),
        ytCoursesFCCAIGameP1_9: resolve(__dirname, 'src/JS/YTCourses/FCC/AIGameP1_9/index.html'),
        contact: resolve(__dirname, 'Contact/index.html')
      }
      // input: {
      //   main: resolve(__dirname, 'index.html'),
      //   js: resolve(__dirname, 'src/JS/index.html'),
      //   mozillaDev: resolve(__dirname, 'src/JS/MozillaDev/index.html'),
      //   responsiveWeb: resolve(__dirname, 'src/JS/ResponsiveWeb/index.html'),
      //   algDataStruct: resolve(__dirname, 'src/JS/Alg&DataStruct/index.html'),
      //   ytCourses: resolve(__dirname, 'src/JS/YTCourses/index.html'),
      //   ytCoursesFrankLabsCourse: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/index.html'),
      //   ytCoursesFCC: resolve(__dirname, 'src/JS/YTCourses/FCC/index.html'),
      //   mozillaDevSynth: resolve(__dirname, 'src/JS/MozillaDev/Synth/index.html'),
      //   responsiveWebCafeMenu: resolve(__dirname, 'src/JS/ResponsiveWeb/CafeMenu/index.html'),
      //   responsiveWebCatPhotoApp: resolve(__dirname, 'src/JS/ResponsiveWeb/CatPhotoApp/index.html'),
      //   responsiveWebColoredMarkers: resolve(__dirname, 'src/JS/ResponsiveWeb/ColoredMarkers/index.html'),
      //   responsiveWebFlexboxPhotoGallery: resolve(__dirname, 'src/JS/ResponsiveWeb/FlexboxPhotoGallery/index.html'),
      //   responsiveWebNutritionLabel: resolve(__dirname, 'src/JS/ResponsiveWeb/NutritionLabel/index.html'),
      //   responsiveWebPiano: resolve(__dirname, 'src/JS/ResponsiveWeb/Piano/index.html'),
      //   responsiveWebRegistrationForm: resolve(__dirname, 'src/JS/ResponsiveWeb/RegistrationForm/index.html'),
      //   responsiveWebRothkoPainting: resolve(__dirname, 'src/JS/ResponsiveWeb/RothkoPainting/index.html'),
      //   responsiveWebSurveyForm: resolve(__dirname, 'src/JS/ResponsiveWeb/SurveyForm/index.html'),
      //   algDataStructMusicPlayer: resolve(__dirname, 'src/JS/Alg&DataStruct/MusicPlayer/index.html'),
      //   algDataStructRolePlayingGame: resolve(__dirname, 'src/JS/Alg&DataStruct/RolePlayingGame/index.html'),
      //   ytCoursesFrankLabsCoursePart01: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part01/index.html'),
      //   ytCoursesFrankLabsCoursePart02: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part02/index.html'),
      //   ytCoursesFrankLabsCoursePart03: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part03/index.html'),
      //   ytCoursesFrankLabsCoursePart04: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part04/index.html'),
      //   ytCoursesFrankLabsCoursePart05: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part05/index.html'),
      //   ytCoursesFrankLabsCoursePart06: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part06/index.html'),
      //   ytCoursesFrankLabsCoursePart07: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part07/index.html'),
      //   ytCoursesFrankLabsCoursePart08: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part08/index.html'),
      //   ytCoursesFrankLabsCoursePart09: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part09/index.html'),
      //   ytCoursesFrankLabsCoursePart10: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part10/index.html'),
      //   ytCoursesFrankLabsCoursePart11: resolve(__dirname, 'src/JS/YTCourses/FrankLabsCourse/Part11/index.html'),
      //   ytCoursesFCCPolyrythms: resolve(__dirname, 'src/JS/YTCourses/FCC/Polyrythms/index.html'),
      //   ytCoursesFCCProAudioAIGame: resolve(__dirname, 'src/JS/YTCourses/FCC/ProAudio-AIGame/index.html'),
      //   ytCoursesFreeCodeCampPolyrythms: resolve(__dirname, 'src/JS/YTCourses/FCC/Polyrythms/index.html'),
      //   contact: resolve(__dirname, 'src/Contact/index.html')
      // }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});

