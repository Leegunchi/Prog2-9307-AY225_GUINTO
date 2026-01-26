import java.awt.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;
import javax.swing.*;

public class AttendanceTracker extends JFrame {
    private JTextField surnameField;
    private JTextField firstNameField;
    private JTextField middleInitialField;
    private JTextField courseYearField;
    private JTextField timeInField;
    private JTextField eSignatureField;
    private JButton submitButton;
    
    public AttendanceTracker() {
        setTitle("Attendance Tracker");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        
        initializeComponents();
        
        setVisible(true);
    }
    
    private void initializeComponents() {
        // Main panel......
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BorderLayout(10, 10));
        mainPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        
        // Title Panel for aesthetic muahahaha
        JPanel titlePanel = new JPanel();
        JLabel titleLabel = new JLabel("Attendance System");
        titleLabel.setFont(new Font("Arial", Font.BOLD, 24));
        titleLabel.setForeground(new Color(41, 128, 185));
        titlePanel.add(titleLabel);
        
        // form panel para po may space po yung mga text field
        JPanel formPanel = new JPanel();
        formPanel.setLayout(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.fill = GridBagConstraints.HORIZONTAL;
        gbc.insets = new Insets(10, 10, 10, 10);
        
        // Surname Text fielldddddd
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.weightx = 0.3;
        JLabel surnameLabel = new JLabel("Surname:");
        surnameLabel.setFont(new Font("Arial", Font.BOLD, 14));
        formPanel.add(surnameLabel, gbc);
        
        gbc.gridx = 1;
        gbc.weightx = 0.7;
        surnameField = new JTextField(20);
        surnameField.setFont(new Font("Arial", Font.PLAIN, 13));
        formPanel.add(surnameField, gbc);
        
        // First Name Text fiellddddd
        gbc.gridx = 0;
        gbc.gridy = 1;
        gbc.weightx = 0.3;
        JLabel firstNameLabel = new JLabel("First Name:");
        firstNameLabel.setFont(new Font("Arial", Font.BOLD, 14));
        formPanel.add(firstNameLabel, gbc);
        
        gbc.gridx = 1;
        gbc.weightx = 0.7;
        firstNameField = new JTextField(20);
        firstNameField.setFont(new Font("Arial", Font.PLAIN, 13));
        formPanel.add(firstNameField, gbc);
        
        // Middle Initial Text Fielldddd
        gbc.gridx = 0;
        gbc.gridy = 2;
        gbc.weightx = 0.3;
        JLabel middleInitialLabel = new JLabel("Middle Initial:");
        middleInitialLabel.setFont(new Font("Arial", Font.BOLD, 14));
        formPanel.add(middleInitialLabel, gbc);
        
        gbc.gridx = 1;
        gbc.weightx = 0.7;
        middleInitialField = new JTextField(20);
        middleInitialField.setFont(new Font("Arial", Font.PLAIN, 13));
        formPanel.add(middleInitialField, gbc);
        
        // Course/Year
        gbc.gridx = 0;
        gbc.gridy = 3;
        gbc.weightx = 0.3;
        JLabel courseYearLabel = new JLabel("Course/Year:");
        courseYearLabel.setFont(new Font("Arial", Font.BOLD, 14));
        formPanel.add(courseYearLabel, gbc);
        
        gbc.gridx = 1;
        gbc.weightx = 0.7;
        courseYearField = new JTextField(20);
        courseYearField.setFont(new Font("Arial", Font.PLAIN, 13));
        formPanel.add(courseYearField, gbc);
        
        // Time In
        gbc.gridx = 0;
        gbc.gridy = 4;
        gbc.weightx = 0.3;
        JLabel timeInLabel = new JLabel("Time In:");
        timeInLabel.setFont(new Font("Arial", Font.BOLD, 14));
        formPanel.add(timeInLabel, gbc);
        // where  text field displays the time po in exactly when po kayo nag bukas nung program
        gbc.gridx = 1;
        gbc.weightx = 0.7;
        timeInField = new JTextField(20);
        timeInField.setFont(new Font("Arial", Font.PLAIN, 13));
        timeInField.setEditable(false);
        timeInField.setBackground(Color.WHITE);
        formPanel.add(timeInField, gbc);
        
        // E-Signature
        gbc.gridx = 0;
        gbc.gridy = 5;
        gbc.weightx = 0.3;
        JLabel eSignatureLabel = new JLabel("E-Signature:");
        eSignatureLabel.setFont(new Font("Arial", Font.BOLD, 14));
        formPanel.add(eSignatureLabel, gbc);
        
        gbc.gridx = 1;
        gbc.weightx = 0.7;
        eSignatureField = new JTextField(20);
        eSignatureField.setFont(new Font("Arial", Font.PLAIN, 11));
        eSignatureField.setEditable(false);
        eSignatureField.setBackground(Color.WHITE);
        formPanel.add(eSignatureField, gbc);
        
        //Button panel
        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 10));
        //to generate po yung attendance record after all the text fields are filled
        submitButton = new JButton("Generate Attendance Record");
        submitButton.setFont(new Font("Arial", Font.PLAIN, 12));
        submitButton.addActionListener(e -> generateAttendanceRecord());
        
        buttonPanel.add(submitButton);
        
        //panels and more panels for main panel
        mainPanel.add(titlePanel, BorderLayout.NORTH);
        mainPanel.add(formPanel, BorderLayout.CENTER);
        mainPanel.add(buttonPanel, BorderLayout.SOUTH);
        
        //main panel in a scroll pane
        JScrollPane scrollPane = new JScrollPane(mainPanel);
        scrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED);
        scrollPane.setHorizontalScrollBarPolicy(JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
        scrollPane.getVerticalScrollBar().setUnitIncrement(16);
        
        add(scrollPane);
        
        //Make generate ng time po once na start po yung java program
        generateAttendanceRecord();
    }
    
    private void generateAttendanceRecord() {
        //Get current date and time using LocalDateTime :p
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = now.format(formatter);
        timeInField.setText(formattedDateTime);
        
        // Generate unique E-Signature per open
        String eSignature = UUID.randomUUID().toString();
        eSignatureField.setText(eSignature);
        
        // Show success message if all name fields and course are filled
        if (!surnameField.getText().trim().isEmpty() && 
            !firstNameField.getText().trim().isEmpty() && 
            !courseYearField.getText().trim().isEmpty()) {
            
            String fullName = surnameField.getText() + ", " + 
                            firstNameField.getText() + " " + 
                            middleInitialField.getText();
            
            JOptionPane.showMessageDialog(this,
                """
                Attendance record generated successfully!
                Name: """ + fullName + "\n" +
                "Course/Year: " + courseYearField.getText() + "\n" +
                "Time In: " + formattedDateTime,
                "Success",
                JOptionPane.INFORMATION_MESSAGE);
        }
    }
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new AttendanceTracker());
    }
}