/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$(document).ready(function() {
  // show hide content from tab click
  $('.ml-item').click(function() {
    $('.1-result').hide();
    $('#div' + jQuery(this).attr('target')).show();
  });

  $('.ml-item').click(function() {
    $(this).addClass('ml-item-active');
    $(this).siblings().removeClass('ml-item-active');
  });

  // view more/top Button
  $('.btn-results').click(function() {
    $('.add-1-result').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).addClass('arrowdown-main').removeClass('arrowup-main');
    } else {
      $(this).addClass('arrowup-main').removeClass('arrowdown-main');
    }
  });

  // reset button code
  $('.reset').click(function() {
    location.reload();
  });
  // view all/top Buttons
  $('.btn-all-results-keywords').click(function() {
    $('.keywords:gt(7)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });

  $('.btn-all-results-entities').click(function() {
    $('.entities:gt(7)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });

  $('.btn-all-results-concepts').click(function() {
    $('.concepts:gt(4)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });

  $('.btn-all-results-targetsentiment').click(function() {
    $('.targetsentiment:gt(7)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });

  // Only show a limited list of results instially
  $(document).ajaxComplete(function() {
    if ($('.keywords').length > 7) {
      $('.keywords:gt(7)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.entities').length > 7) {
      $('.entities:gt(7)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.concepts').length > 4) {
      $('.concepts:gt(4)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.targetsentiment').length > 7) {
      $('.targetsentiment:gt(7)').hide();
    }
  });

  // hide show more if total results are less than X
  $(document).ajaxComplete(function() {
    if ($('.concepts').length < 6) {
      $('.btn-all-results-concepts').hide();
    } else {
      $('.btn-all-results-concepts').show();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.entities').length < 9) {
      $('.btn-all-results-entities').hide();
    } else {
      $('.btn-all-results-entities').show();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.keywords').length < 9) {
      $('.btn-all-results-keywords').hide();
    } else {
      $('.btn-all-results-keywords').show();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.targetsentiment').length < 9) {
      $('.btn-all-results-targetsentiment').hide();
    } else {
      $('.btn-all-results-targetsentiment').show();
    }
  });
  $(document).ajaxComplete(function() {
    $('.header-relations').each(function() {
      $(this).text($(this).text().substr(0, 100) + '...');
    });
  });
  // relations main headings hide & expand actions
  $(document).ajaxComplete(function() {
    if ($('.element-relations').length > 3) {
      $('.element-relations:gt(3)').hide();
    }
  });
  $(document).ajaxComplete(function() {
    if ($('.element-relations ').length < 3) {
      $('.btn-all-results-relations').hide();
    } else {
      $('.btn-all-results-relations').show();
    }
  });

  $('.btn-all-results-relations').click(function() {
    $('.element-relations:gt(3)').toggle('fast');
    if ($.trim($(this).text()) === 'View top results') {
      $(this).text('View all results');
    } else {
      $(this).text('View top results');
    }
  });

  // hide & expand relations content
  $(document).ajaxComplete(function() {
    $('.header-relations').click(function() {
      $(this).toggleClass('arrowup arrowdown');
      $(this).siblings('.content-relations').toggle();
    });
  });

  // Show first Relations result only
  $(document).ajaxComplete(function() {
    $('.content-relations:first').css('display', 'block');
    $('.header-relations:first').addClass('arrowdown').removeClass('arrowup');
  });

  // JSON buttons
  $('.json-btn').click(function() {
    $('#json' + jQuery(this).attr('target')).toggle();
  });

  // Show error loading and results
  $('.container').hide();
  $('#submitbutton').click(function() {
    $('.loading').show();
    $('.container').hide();
    $(document).ajaxStart(function() {
      $('.loading').show();
    });
    $(document).ajaxError(function() {
      $(".error").empty();
      $('.error').show();
      $('.error').text('There has been an error in processing your request.');
    });
    $(document).ajaxComplete(function() {
      $('.loading').hide();
      $('.container').show();
      document.getElementById('results').scrollIntoView(true);
    });
  });
});
