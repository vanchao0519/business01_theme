<?php

/**
 * @file
 * Theme settings form for business01 theme.
 */

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function business01_form_system_theme_settings_alter(&$form, &$form_state) {

  $form['business01'] = [
    '#type' => 'details',
    '#title' => t('business01'),
    '#open' => TRUE,
  ];

  $form['business01']['font_size'] = [
    '#type' => 'number',
    '#title' => t('Font size'),
    '#min' => 12,
    '#max' => 18,
    '#default_value' => theme_get_setting('font_size'),
  ];

}
