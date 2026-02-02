// Programmer: Guinto, Juan Alphonse Valentin, A.
// Student ID: 25-1172-125

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.*;
import java.io.*;

public class StudentRecordSystem_GUINTO extends JFrame {
    private JTable table;
    private DefaultTableModel tableModel;
    private JTextField idField, nameField, gradeField;
    private JButton addButton, deleteButton;
    
    public StudentRecordSystem_GUINTO() {
        setTitle("Records - Guinto, Juan Alphonse Valentin, A. 25-1172-125");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(1200, 600);
        setLocationRelativeTo(null);
        initializeComponents();
        loadDataFromCSV();
        setVisible(true);
    }
    
    private void initializeComponents() {
        JPanel mainPanel = new JPanel(new BorderLayout(10, 10));
        mainPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        String[] columnNames = {"StudentID", "First Name", "Last Name", "LAB WORK 1", 
        "LAB WORK 2", "LAB WORK 3", "PRELIM EXAM", "ATTENDANCE GRADE"};
        tableModel = new DefaultTableModel(columnNames, 0);
        table = new JTable(tableModel);
        table.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        JScrollPane scrollPane = new JScrollPane(table);
        mainPanel.add(scrollPane, BorderLayout.CENTER);
        JPanel inputPanel = new JPanel(new FlowLayout(FlowLayout.LEFT, 10, 10));
        inputPanel.setBorder(BorderFactory.createTitledBorder("Add New Record"));
        inputPanel.add(new JLabel("Student ID:"));
        idField = new JTextField(12);
        inputPanel.add(idField);
        inputPanel.add(new JLabel("First Name:"));
        nameField = new JTextField(15);
        inputPanel.add(nameField);
        inputPanel.add(new JLabel("Last Name:"));
        gradeField = new JTextField(15);
        inputPanel.add(gradeField);
        addButton = new JButton("Add Record");
        addButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                addRecord();
            }
        });
        inputPanel.add(addButton);
        deleteButton = new JButton("Delete Selected");
        deleteButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                deleteRecord();
            }
        });
        inputPanel.add(deleteButton);
        
        mainPanel.add(inputPanel, BorderLayout.SOUTH);
        
        add(mainPanel);
    }
    
    private void loadDataFromCSV() {
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader("class_records.csv"));
            String line;
            boolean isFirstLine = true;
            
            while ((line = reader.readLine()) != null) {
                if (isFirstLine) {
                    isFirstLine = false;
                    continue;
                }
                String[] data = line.split(",");
                if (data.length >= 8) {
                    tableModel.addRow(data);
                }
            }
            
            JOptionPane.showMessageDialog(this, 
                "Successfully loaded " + tableModel.getRowCount() + " records from CSV file.",
                "Data Loaded", 
                JOptionPane.INFORMATION_MESSAGE);
                
        } catch (FileNotFoundException e) {
            JOptionPane.showMessageDialog(this, 
                "Error: class_records.csv file not found!\n" + e.getMessage(),
                "File Not Found", 
                JOptionPane.ERROR_MESSAGE);
        } catch (IOException e) {
            JOptionPane.showMessageDialog(this, 
                "Error reading CSV file!\n" + e.getMessage(),
                "I/O Error", 
                JOptionPane.ERROR_MESSAGE);
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException e) {
                System.err.println("Error closing file: " + e.getMessage());
            }
        }
    }
    
    private void addRecord() {
        String id = idField.getText().trim();
        String firstName = nameField.getText().trim();
        String lastName = gradeField.getText().trim();
        
        if (id.isEmpty() || firstName.isEmpty() || lastName.isEmpty()) {
            JOptionPane.showMessageDialog(this, 
                "Please fill in Student ID, First Name, and Last Name!",
                "Input Required", 
                JOptionPane.WARNING_MESSAGE);
            return;
        }
        Object[] newRow = {id, firstName, lastName, "0", "0", "0", "0", "0"};
        tableModel.addRow(newRow);
        idField.setText("");
        nameField.setText("");
        gradeField.setText("");
        
        JOptionPane.showMessageDialog(this, 
            "Record added successfully!",
            "Success", 
            JOptionPane.INFORMATION_MESSAGE);
    }
    private void deleteRecord() {
        int selectedRow = table.getSelectedRow();
        if (selectedRow == -1) {
            JOptionPane.showMessageDialog(this, 
                "Please select a row to delete!",
                "No Selection", 
                JOptionPane.WARNING_MESSAGE);
            return;
        }
        int confirm = JOptionPane.showConfirmDialog(this, 
            "Are you sure you want to delete this record?",
            "Confirm Delete", 
            JOptionPane.YES_NO_OPTION);
        if (confirm == JOptionPane.YES_OPTION) {
            tableModel.removeRow(selectedRow);
            JOptionPane.showMessageDialog(this, 
                "Record deleted successfully!",
                "Success", 
                JOptionPane.INFORMATION_MESSAGE);
        }
    }
    public static void main(String[] args) {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new StudentRecordSystem_GUINTO();
            }
        });
    }
}