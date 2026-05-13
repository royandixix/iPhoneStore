@extends('admin.layouts.app')
@section('title', 'Notification Settings')

@section('content')

<div class="container-fluid">

    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h2 class="mb-1">Notification Settings</h2>
            <p class="text-muted mb-0">
                Manage how you receive notifications from the system, including email alerts,
                order updates, customer activity, and other important system events to stay informed.
            </p>
        </div>
    </div>

    <div class="row">

        <!-- SIDEBAR -->
        <div class="col-md-3">
            @include('admin.settings.components.sidebar')
        </div>

        <!-- CONTENT -->
        <div class="col-md-9">

            <div class="card p-4 shadow-sm border-0">

                <h5 class="mb-4 d-flex align-items-center">
                    <i class="ti ti-bell me-2"></i> Notification Preferences
                </h5>

                <form action="{{ route('admin.settings.notifications.update') }}" method="POST">
                    @csrf

                    <!-- EMAIL NOTIFICATIONS -->
                    <div class="mb-4">
                        <h6 class="mb-3">Email Notifications</h6>

                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" name="email_orders" id="email_orders">
                            <label class="form-check-label" for="email_orders">
                                Order Updates
                            </label>
                        </div>

                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" name="email_customers" id="email_customers">
                            <label class="form-check-label" for="email_customers">
                                New Customer Registration
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="email_reports" id="email_reports">
                            <label class="form-check-label" for="email_reports">
                                Weekly Reports
                            </label>
                        </div>
                    </div>

                    <!-- SYSTEM NOTIFICATIONS -->
                    <div class="mb-4">
                        <h6 class="mb-3">System Notifications</h6>

                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" name="system_orders" id="system_orders">
                            <label class="form-check-label" for="system_orders">
                                Order Status Changes
                            </label>
                        </div>

                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" name="system_stock" id="system_stock">
                            <label class="form-check-label" for="system_stock">
                                Low Stock Alerts
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="system_security" id="system_security">
                            <label class="form-check-label" for="system_security">
                                Security Alerts
                            </label>
                        </div>
                    </div>

                    <!-- BUTTON -->
                    <button type="submit" class="btn btn-primary d-flex align-items-center gap-2">
                        <i class="ti ti-device-floppy"></i> Save Notification Settings
                    </button>

                </form>

            </div>

        </div>

    </div>

</div>

@include('admin.components.alert-success')
@include('admin.components.alert-error')

@endsection