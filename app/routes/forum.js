import Ember from 'ember';
import preloadImages from '../utils/preload-images';

export default Ember.Route.extend({
  preload: function() {
    return preloadImages('/images/forum.png');
  },

  beforeModel: function() {
    return this.preload();
  }
});
