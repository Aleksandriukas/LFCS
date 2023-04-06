// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    tauri::Builder::default()
    .setup(|app| {
      let handle = app.handle();
      tauri::async_runtime::spawn(async move {
       let response = handle.updater().check().await;
      });
      Ok(())
    });
}